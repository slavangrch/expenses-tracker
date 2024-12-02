const express = require('express');
const expensesController = require('../controllers/expenses');
const router = express.Router();

router.post('/addExpense', expensesController.addExpense);
router.get('/getExpenses', expensesController.getExpenses);

module.exports = router;
