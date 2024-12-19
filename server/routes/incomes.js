const express = require('express');
const incomesController = require('../controllers/incomes');
const router = express.Router();

router.post('/addIncome', incomesController.addIncome);
router.get('/getIncomes', incomesController.getIncomes);
router.delete('/deleteIncome/:id', incomesController.deleteIncome);

module.exports = router;
