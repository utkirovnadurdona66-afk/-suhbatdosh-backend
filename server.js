const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const CHAT_MODEL = 'gemini-2.5-flash';
const IMAGE_MODEL = 'gemini-2.5-flash-image';

const SYSTEM_PROMPT = "Siz \"Sardor AI\" nomli sun'iy intellekt yordamchisisiz, lekin robotga emas, oddiy, jonli odamga o'xshab gaplashasiz — xuddi yaqin do'stday. ENG MUHIM QOIDA — TIL: foydalanuvchi qaysi tilda yozsa, siz ham AYNAN o'sha tilda javob bering, va o'sha tilning ONA TILI kabi tabiiy, so'zlashuv uslubida gapiring — sun'iy tarjima qilingandek emas. Agar o'zbek tilida yozsa — o'zbekka o'xshab, o'zbekona iboralar bilan gapiring. Agar ingliz tilida yozsa — xuddi tug'ma inglizzabon odamdek, tabiiy ingliz so'zlashuv uslubida (slang, qisqartmalar, tabiiy ohang bilan) javob bering. Agar rus tilida yozsa — xuddi tug'ma ruszabon odamdek, tabiiy rus so'zlashuv uslubida javob bering. Boshqa til bo'lsa ham xuddi shunday — o'sha tilning ona tilida so'zlashuvchisidek tabiiy gapiring. Har doim rasmiy, quruq jumlalar ishlatmang — jonli, samimiy, so'zlashuv uslubida gapiring. Javoblaringizni imkon qadar qisqa va lo'nda tuting, cho'zmang, lekin agar savol chuqur yoki texnik bo'lsa, to'liq va aniq tushuntiring — javobingizni hech qachon yarmida to'xtatmang, doim to'liq fikringizni oxirigacha yetkazing. Foydalanuvchi hazil qilsa — hazil bilan javob bering, maqtasa — samimiy rahmat ayting, oddiy salomlashsa — issiq va qisqa javob bering, uzun ma'ruza o'qib bermang. Faqat jiddiy yoki chuqur savol berilganda batafsil va aniq javob bering, aks holda tabiiy, qisqa va samimiy suhbat uslubida javob bering. Emoji vaqti-vaqti bilan, o'rinli ishlatilsin, lekin haddan tashqari ko'p bo'lmasin. Agar sizni kim yaratgani, kim ishlab chiqqani yoki muallifingiz haqida so'ralsa, aniq va ishonch bilan (foydalanuvchi tilida) \"Meni Saydurasulov Sardor aka yaratgan\" degan ma'noni bering — bu haqda boshqacha aytmang. Bilim chegarangiz taxminan 2024 yil oxirigacha — agar 2025 yoki 2026 yildagi aniq voqealar haqida so'ralsa, buni halol tan oling va \"bu haqda aniq ma'lumotim yo'q\" deb ayting, taxmin qilib javob bermang. Agar rasm yoki fayl (PDF, matn) yuborilsa, uni diqqat bilan tahlil qilib, aniq va foydali javob bering.";

if (!process.env.GEMINI_API_KEY) {
  console.warn('OGOHLANTIRISH: GEMINI_API_KEY muhit o\'zgaruvchisi topilmadi. /chat va /generate-image ishlamaydi.');
}

// ---------- Yordamchi funksiyalar ----------

// Bitta xabar ichidagi barcha rasm/fayllarni Gemini formatiga o'giradi
function messageToParts(m) {
  const parts = [];
  if (m.content) parts.push({ text: m.content });

  // Bir nechta rasm
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
  // Botning oldin chizgan rasmi (kontekst uchun)
  if (m.generatedImage && m.generatedImage.data) {
    parts.push({ inline_data: { mime_type: m.generatedImage.mimeType || 'image/png', data: m.generatedImage.data } });
  }
  if (parts.length === 0) parts.push({ text: '' });
  return parts;
}

function toGeminiContents(history) {
  return history.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: messageToParts(m)
  }));
}

function friendlyErrorMessage(rawMsg) {
  if (/quota|rate limit|resource_exhausted/i.test(rawMsg)) {
    return "Hozir juda ko'p so'rov kelyapti, biroz kuting va qaytadan urinib ko'ring.";
  }
  if (/api key|permission|unauthenticated/i.test(rawMsg)) {
    return "Server sozlamalarida muammo bor (API kalit). Administratorga xabar bering.";
  }
  if (/safety|blocked/i.test(rawMsg)) {
    return "Bu so'rovga javob berib bo'lmadi, chunki u xavfsizlik qoidalariga to'g'ri kelmadi.";
  }
  return rawMsg || 'Nomalum xatolik yuz berdi.';
}

// ---------- /chat — jonli (streaming) suhbat ----------
app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: { message: 'messages massivi kerak' } });
    }

    const today = new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
    const systemWithDate = SYSTEM_PROMPT + ` Bugungi sana: ${today}. Agar sana yoki hozirgi vaqt haqida so'ralsa, shu sanani ishlatib javob bering.`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${CHAT_MODEL}:streamGenerateContent?alt=sse&key=${process.env.GEMINI_API_KEY}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemWithDate }] },
        contents: toGeminiContents(messages),
        generationConfig: { maxOutputTokens: 8192, temperature: 0.9 }
      })
    });

    if (!geminiRes.ok) {
      let msg = 'Gemini xatoligi';
      try {
        const errData = await geminiRes.json();
        msg = (errData.error && errData.error.message) ? errData.error.message : msg;
      } catch (e) {}
      return res.status(geminiRes.status).json({ error: { message: friendlyErrorMessage(msg) } });
    }

    // Streaming javob — frontendga so'z-so'z jonli uzatamiz
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    if (res.flushHeaders) res.flushHeaders();

    const reader = geminiRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let sentAny = false;

    req.on('close', () => {
      try { reader.cancel(); } catch (e) {}
    });

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
          const cand = obj.candidates && obj.candidates[0];
          const text = cand && cand.content
            ? (cand.content.parts || []).map(p => p.text || '').join('')
            : '';
          if (text) {
            sentAny = true;
            res.write(`data: ${JSON.stringify({ text })}\n\n`);
          }
          if (cand && cand.finishReason && cand.finishReason !== 'STOP' && !sentAny) {
            res.write(`data: ${JSON.stringify({ text: "Kechirasiz, bu so'rovga javob bera olmadim." })}\n\n`);
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
      try { res.end(); } catch (e) {}
    }
  }
});

// ---------- /generate-image — rasm chizish (Nano Banana) ----------
app.post('/generate-image', async (req, res) => {
  try {
    const { prompt, image } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: { message: 'prompt matni kerak' } });
    }

    const parts = [{ text: prompt }];
    if (image && image.data) {
      parts.push({ inline_data: { mime_type: image.mimeType || 'image/jpeg', data: image.data } });
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGE_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
      })
    });

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      const msg = (data.error && data.error.message) ? data.error.message : 'Gemini xatoligi';
      return res.status(geminiRes.status).json({ error: { message: friendlyErrorMessage(msg) } });
    }

    const cand = data.candidates && data.candidates[0];
    const responseParts = (cand && cand.content && cand.content.parts) || [];

    let imageOut = null;
    let textOut = '';
    for (const p of responseParts) {
      const inline = p.inlineData || p.inline_data;
      if (inline && inline.data) {
        imageOut = { mimeType: inline.mimeType || inline.mime_type || 'image/png', data: inline.data };
      }
      if (p.text) textOut += p.text;
    }

    if (!imageOut) {
      return res.status(502).json({ error: { message: "Rasm chizib bo'lmadi, boshqacha so'rov bilan qayta urinib ko'ring." } });
    }

    res.json({ image: imageOut, text: textOut });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: { message: 'Server xatoligi' } });
  }
});

app.get('/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send('Sardor AI backend ishlayapti.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
