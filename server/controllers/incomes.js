const Income = require('../models/income');

exports.getIncomes = async (req, res, next) => {
  try {
    const userId = req.userId;
    const incomes = await Income.find({ user: userId });
    if (!incomes) {
      return res.status(404).json({ message: 'No incomes for this user.' });
    }
    res.status(200).json(incomes);
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.addIncome = async (req, res, next) => {
  try {
    const { amount, category, description } = req.body;
    const date = Date.now();
    const user = req.userId;
    const income = new Income({ amount, category, description, date, user });
    const newIncome = await income.save();
    res.status(201).json({ newIncome, message: 'New income added!' });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
