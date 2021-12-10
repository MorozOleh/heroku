require('dotenv').config();
const express = require('express');

const mysql = require('mysql');
const PORT = process.env.PORT || 8000;

const connectionString = process.env.DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

const app = express();

app.get('/', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, rows) => {
    if (err) throw err;

    res.send(rows);
  });
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
