/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
