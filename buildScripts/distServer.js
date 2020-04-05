/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { "id": 1, "firstName": "Hitendra", "lastName": "Rajput", "email": "hitendra.http@gmail.com" },
    { "id": 2, "firstName": "The", "lastName": "End", "email": "theend@test.com" },
    { "id": 3, "firstName": "Chu", "lastName": "Lee", "email": "chulee@test.com" }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
