const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT);
    console.log('server running');
  })
  .catch((err) => {
    console.log(err);
  });

console.log('test');
