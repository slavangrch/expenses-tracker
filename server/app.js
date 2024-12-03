const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const expensesRoutes = require('./routes/expenses');
const incomesRoutes = require('./routes/incomes');
const { isAuth } = require('./middleware/isAuth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { error } = require('./middleware/error');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Controll-Allow-Methods',
    'POST, GET, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.use(bodyParser.json());
app.use('/auth', userRoutes);
app.use('/expenses', isAuth, expensesRoutes);
app.use('/incomes', isAuth, incomesRoutes);

app.use(error);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT);
    console.log('server running');
  })
  .catch((err) => {
    console.log(err);
  });
