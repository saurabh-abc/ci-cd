console.log(__filename);
const express = require('express');
const app = express();
const connectDB = require('./db');
connectDB();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('ROOT CHANGED');
});
app.get('/updated', (req, res) => {
  res.send('Huraahhhhhh ci/cd reflected!');
});