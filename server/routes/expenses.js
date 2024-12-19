const express = require('express');
const expensesController = require('../controllers/expenses');
const router = express.Router();
const { body } = require('express-validator');

router.post('/addExpense', expensesController.addExpense);
router.get('/getExpenses', expensesController.getExpenses);
router.delete('/deleteExpense/:id', expensesController.deleteExpense);

module.exports = router;
