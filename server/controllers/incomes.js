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
    const { amount, category, description, date } = req.body;
    const incomeDate = date ? new Date(date) : new Date();
    const user = req.userId;
    const income = new Income({
      amount,
      category,
      description,
      date: incomeDate,
      user,
    });
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

exports.deleteIncome = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Id is required!' });
    }
    const result = await Income.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ error: 'Income not found' });
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
