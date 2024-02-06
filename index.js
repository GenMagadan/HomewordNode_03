const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const pathToJson = path.join(__dirname, 'pageViews.json');

app.get('/', (req, res) => {
  const viewHome = JSON.parse(fs.readFileSync(pathToJson, 'utf-8'));

  viewHome.countHome = ++viewHome.countHome;

  fs.writeFileSync(pathToJson, JSON.stringify(viewHome, null, 2));

  res.send(`
  <h1>Главная страница сайта</h1>
  <a href="/about">На следующюю</a>
  <h3>Просмотров: ${viewHome.countHome}</h3>
  `);
});

app.get('/about', (req, res) => {
  const viewAbout = JSON.parse(fs.readFileSync(pathToJson, 'utf-8'));

  viewAbout.countAbout = ++viewAbout.countAbout;

  fs.writeFileSync(pathToJson, JSON.stringify(viewAbout, null, 2));

  res.send(
    `
    <h1>Страница о чём-то таком</h1>
    <a href="/">На главную страницу</a>
    <h3>Просмотров: ${viewAbout.countAbout}</h3>
    `
  );
});
const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
