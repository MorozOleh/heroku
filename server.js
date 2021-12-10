const express = require('express');
const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
  res.end(`
  <div>
    <ul>
      <li><a href="/">homepage</a></li>
      <li><a href="/about">about</a></li>
    </ul>
 </div>`);
});
app.get('/about', (req, res) => {
  res.end(`
  <div>
    <ul>
      <li><a href="/">homepage</a></li>
      <li><a href="/about">about</a></li>
    </ul>
 </div>`);
});

app.listen(PORT, () => {
  `the port: ${PORT} is running`;
});
