console.log(__filename);
const express = require('express');
const app = express();
const connectDB = require('./db');
connectDB();
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/api', (req, res) => {
  res.send('ROOT CHANGED');
});
app.get('/api/updated', (req, res) => {
  res.send('Huraahhhhhh ci/cd reflected!');
});
app.get('/api/v1', (req, res) => {
  res.send('V1-------------!');
});
app.get('/api/v2', (req, res) => {
  res.send('V2-------------!');
});