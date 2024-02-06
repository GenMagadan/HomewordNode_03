const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
   <h1>Главная страница</h1>
   <a href='/about'>На вторую страницу</a>
   `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h1>Вторая страница</h1>
    <a href='/'>На главную страницу</a>
    `);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Запущен на порту ${port}`);
});
