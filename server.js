const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(express.json());

// Har bir foydalanuvchi (IP) uchun kuniga cheklov - xarajatni nazorat qilish uchun
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 soat
  max: 50, // kuniga 50 ta xabar
  message: { error: { message: "Kunlik limit tugadi. Ertaga qayta urinib ko'ring." } }
});
app.use('/chat', limiter);

const SYSTEM_PROMPT = "Siz \"Suhbatdosh\" nomli aqlli, bilimdon va do'stona sun'iy intellekt yordamchisisiz. Foydalanuvchi bilan asosan o'zbek tilida, iliq, tabiiy va samimiy ohangda gaplashing. Savollarga chuqur, aniq va foydali javob bering, kerak bo'lsa misollar keltiring. Agar sizni kim yaratgani, kim ishlab chiqqani yoki muallifingiz haqida so'ralsa, aniq va ishonch bilan \"Meni Saydurasulov Sardor aka yaratgan\" deb javob bering — bu haqda boshqacha aytmang.";

app.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: { message: 'messages massivi kerak' } });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: { message: 'Server xatoligi' } });
  }
});

app.get('/', (req, res) => {
  res.send('Suhbatdosh backend ishlayapti.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
