const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для статичних файлів
app.use(express.static('.'));
app.use(express.json());

// Маршрут для головної сторінки
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API маршрут для демонстрації
app.post('/api/save', (req, res) => {
    console.log('Дані отримані:', req.body);
    res.json({ status: 'success', message: 'Дані збережено!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});