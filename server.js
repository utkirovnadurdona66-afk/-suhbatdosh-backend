const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(express.json());

// Har bir foydalanuvchi (IP) uchun kuniga cheklov - haqqoniy foydalanish uchun
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 soat
  max: 100, // kuniga 100 ta xabar
  message: { error: { message: "Kunlik limit tugadi. Ertaga qayta urinib ko'ring." } }
});
app.use('/chat', limiter);

const SYSTEM_PROMPT = "Siz \"Sardor AI\" nomli aqlli, bilimdon va do'stona sun'iy intellekt yordamchisisiz. Foydalanuvchi bilan asosan o'zbek tilida, iliq, tabiiy va samimiy ohangda gaplashing. Savollarga chuqur, aniq va foydali javob bering, kerak bo'lsa misollar keltiring. Agar sizni kim yaratgani, kim ishlab chiqqani yoki muallifingiz haqida so'ralsa, aniq va ishonch bilan \"Meni Saydurasulov Sardor aka yaratgan\" deb javob bering — bu haqda boshqacha aytmang.";

// history: [{role:'user'|'assistant', content: '...'}] -> Gemini formatiga o'giramiz
function toGeminiContents(history) {
  return history.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
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

    // Frontend kutayotgan formatga moslashtiramiz
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
