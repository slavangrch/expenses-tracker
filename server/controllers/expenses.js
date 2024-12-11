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
    const { amount, category, description, date } = req.body;
    const expenseDate = date ? new Date(date) : new Date();
    const user = req.userId;
    const expense = new Expense({
      amount,
      category,
      description,
      date: expenseDate,
      user,
    });
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

exports.deleteExpense = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Id is required!' });
    }
    const result = await Expense.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json({ message: 'Item deleted!' });
  } catch (error) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
      next(error);
    }
  }
};
