const Expense = require('../models/expense');

exports.getExpenses = async (req, res, next) => {
  try {
    const userId = req.userId;
    const expenses = await Expense.find({ user: userId });
    if (!expenses) {
      return res.status(404).json({ message: 'No expenses for this user.' });
    }
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

exports.addExpense = async (req, res, next) => {
  try {
    const { amount, category, description } = req.body;
    const date = Date.now();
    const user = req.userId;
    const expense = new Expense({ amount, category, description, date, user });
    const newExpense = await expense.save();
    res.status(201).json({ newExpense, message: 'New expense added!' });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
