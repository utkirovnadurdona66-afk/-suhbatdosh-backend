const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

const SYSTEM_PROMPT = "Siz \"Sardor AI\" nomli sun'iy intellekt yordamchisisiz, lekin robotga emas, oddiy, jonli odamga o'xshab gaplashasiz — xuddi yaqin do'stday. ENG MUHIM QOIDA — TIL: foydalanuvchi qaysi tilda yozsa, siz ham AYNAN o'sha tilda javob bering, va o'sha tilning ONA TILI kabi tabiiy, so'zlashuv uslubida gapiring — sun'iy tarjima qilingandek emas. Agar o'zbek tilida yozsa — o'zbekka o'xshab, o'zbekona iboralar bilan gapiring. Agar ingliz tilida yozsa — xuddi tug'ma inglizzabon odamdek, tabiiy ingliz so'zlashuv uslubida (slang, qisqartmalar, tabiiy ohang bilan) javob bering. Agar rus tilida yozsa — xuddi tug'ma ruszabon odamdek, tabiiy rus so'zlashuv uslubida javob bering. Boshqa til bo'lsa ham xuddi shunday — o'sha tilning ona tilida so'zlashuvchisidek tabiiy gapiring. Har doim rasmiy, quruq jumlalar ishlatmang — jonli, samimiy, so'zlashuv uslubida gapiring. Javoblaringizni imkon qadar qisqa va lo'nda tuting, cho'zmang, lekin agar savol chuqur yoki texnik bo'lsa, to'liq va aniq tushuntiring — javobingizni hech qachon yarmida to'xtatmang, doim to'liq fikringizni oxirigacha yetkazing. Foydalanuvchi hazil qilsa — hazil bilan javob bering, maqtasa — samimiy rahmat ayting, oddiy salomlashsa — issiq va qisqa javob bering, uzun ma'ruza o'qib bermang. Faqat jiddiy yoki chuqur savol berilganda batafsil va aniq javob bering, aks holda tabiiy, qisqa va samimiy suhbat uslubida javob bering. Emoji vaqti-vaqti bilan, o'rinli ishlatilsin, lekin haddan tashqari ko'p bo'lmasin. Agar sizni kim yaratgani, kim ishlab chiqqani yoki muallifingiz haqida so'ralsa, aniq va ishonch bilan (foydalanuvchi tilida) \"Meni Saydurasulov Sardor aka yaratgan\" degan ma'noni bering — bu haqda boshqacha aytmang. Bilim chegarangiz taxminan 2024 yil oxirigacha — agar 2025 yoki 2026 yildagi aniq voqealar haqida so'ralsa, buni halol tan oling va \"bu haqda aniq ma'lumotim yo'q\" deb ayting, taxmin qilib javob bermang. Agar rasm yoki fayl (PDF, matn) yuborilsa, uni diqqat bilan tahlil qilib, aniq va foydali javob bering.";

// Bitta xabar ichidagi barcha rasm/fayllarni Gemini formatiga o'giradi
function messageToParts(m) {
  const parts = [];
  if (m.content) parts.push({ text: m.content });

  // Yangi format: bir nechta rasm
  if (Array.isArray(m.images)) {
    for (const img of m.images) {
      if (img && img.data) {
        parts.push({ inline_data: { mime_type: img.mimeType || 'image/jpeg', data: img.data } });
      }
    }
  }
  // Eski format bilan moslik: bitta rasm
  if (m.image && m.image.data) {
    parts.push({ inline_data: { mime_type: m.image.mimeType || 'image/jpeg', data: m.image.data } });
  }
  // PDF fayl
  if (m.file && m.file.data) {
    parts.push({ inline_data: { mime_type: m.file.mimeType || 'application/pdf', data: m.file.data } });
  }
  return parts;
}

function toGeminiContents(history) {
  return history.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: messageToParts(m)
  }));
}

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: { message: 'messages massivi kerak' } });
    }

    const today = new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
    const systemWithDate = SYSTEM_PROMPT + ` Bugungi sana: ${today}. Agar sana yoki hozirgi vaqt haqida so'ralsa, shu sanani ishlatib javob bering.`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${process.env.GEMINI_API_KEY}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemWithDate }] },
        contents: toGeminiContents(messages),
        generationConfig: { maxOutputTokens: 8192, temperature: 0.9 }
      })
    });

    // Agar Gemini xato qaytarsa — oddiy JSON xato sifatida qaytaramiz
    if (!geminiRes.ok) {
      let msg = 'Gemini xatoligi';
      try {
        const errData = await geminiRes.json();
        msg = (errData.error && errData.error.message) ? errData.error.message : msg;
      } catch (e) {}
      if (/quota|rate limit/i.test(msg)) {
        msg = "Hozir juda ko'p so'rov kelyapti, biroz kuting va qaytadan urinib ko'ring.";
      }
      return res.status(geminiRes.status).json({ error: { message: msg } });
    }

    // Streaming javob — frontendga so'z-so'z jonli uzatamiz
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    if (res.flushHeaders) res.flushHeaders();

    const reader = geminiRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const jsonStr = trimmed.slice(5).trim();
        if (!jsonStr) continue;
        try {
          const obj = JSON.parse(jsonStr);
          const text = obj.candidates && obj.candidates[0] && obj.candidates[0].content
            ? obj.candidates[0].content.parts.map(p => p.text || '').join('')
            : '';
          if (text) {
            res.write(`data: ${JSON.stringify({ text })}\n\n`);
          }
        } catch (e) {
          // to'liq bo'lmagan JSON qismini o'tkazib yuboramiz
        }
      }
    }
    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.status(500).json({ error: { message: 'Server xatoligi' } });
    } else {
      res.end();
    }
  }
});

app.get('/', (req, res) => {
  res.send('Sardor AI backend ishlayapti.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
