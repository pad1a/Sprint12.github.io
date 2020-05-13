const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});