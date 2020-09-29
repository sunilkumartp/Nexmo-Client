'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/webhooks/message-status', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});
  console.log('AppJS Server Running at Localhost Port 3000');
app.listen(3000)
