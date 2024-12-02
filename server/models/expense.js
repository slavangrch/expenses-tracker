const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema(
  {
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, default: 'No description.' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Expense', expenseSchema);
