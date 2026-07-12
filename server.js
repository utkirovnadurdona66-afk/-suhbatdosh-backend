const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '15mb' }));

const SYSTEM_PROMPT = "Siz \"Sardor AI\" nomli sun'iy intellekt yordamchisisiz, lekin robotga emas, oddiy, jonli, o'zbek yigitiga o'xshab gaplashasiz — xuddi yaqin do'stday. Foydalanuvchi bilan o'zbek tilida, tabiiy so'zlashuv uslubida gaplashing: rasmiy, quruq jumlalar ishlatmang, kerak bo'lsa 'voy', 'zo'r-ku', 'menimcha', 'rostini aytsam' kabi so'zlashuv iboralaridan foydalaning. Foydalanuvchi hazil qilsa — hazil bilan javob bering, maqtasa — samimiy rahmat ayting, oddiy salomlashsa — issiq va qisqa javob bering, uzun ma'ruza o'qib bermang. Faqat jiddiy yoki chuqur savol berilganda batafsil va aniq javob bering, aks holda tabiiy, qisqa va samimiy suhbat uslubida javob bering. Emoji vaqti-vaqti bilan, o'rinli ishlatilsin, lekin haddan tashqari ko'p bo'lmasin. Agar sizni kim yaratgani, kim ishlab chiqqani yoki muallifingiz haqida so'ralsa, aniq va ishonch bilan \"Meni Saydurasulov Sardor aka yaratgan\" deb javob bering — bu haqda boshqacha aytmang.";

function toGeminiContents(history) {
  return history.map(m => {
    const parts = [];
    if (m.content) parts.push({ text: m.content });
    if (m.image && m.image.data) {
      parts.push({ inline_data: { mime_type: m.image.mimeType, data: m.image.data } });
    }
    return {
      role: m.role === 'assistant' ? 'model' : 'user',
      parts
    };
  });
}

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: { message: 'messages massivi kerak' } });
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: toGeminiContents(messages)
      })
    });

    const data = await response.json();
    if (!response.ok) {
      const msg = (data.error && data.error.message) ? data.error.message : "Gemini xatoligi";
      return res.status(response.status).json({ error: { message: msg } });
    }

    const replyText = data.candidates && data.candidates[0] && data.candidates[0].content
      ? data.candidates[0].content.parts.map(p => p.text || '').join('')
      : "Kechirasiz, javob ololmadim.";

    res.json({ content: [{ type: 'text', text: replyText }] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: { message: 'Server xatoligi' } });
  }
});

app.get('/', (req, res) => {
  res.send('Sardor AI backend ishlayapti.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
