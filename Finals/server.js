// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Настройка соединения с базой данных MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // замените на ваш пароль
  database: 'your_database_name', // замените на имя вашей базы данных
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных установлено');
});

// Эндпоинт для получения данных аккаунта
app.get('/api/payment-account', (req, res) => {
  const query = 'SELECT * FROM payment_account';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Эндпоинт для обновления данных аккаунта
app.post('/api/payment-account', (req, res) => {
  const { id, account_number, balance } = req.body;
  const query = 'UPDATE payment_account SET account_number = ?, balance = ? WHERE id = ?';
  db.query(query, [account_number, balance, id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
