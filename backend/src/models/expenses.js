const mongoose = require("mongoose");

// Define the schema for the income/expense tracker
const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    incomes: [
      {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        description: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    expenses: [
      {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        description: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    savings: [
      {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        description: String,
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// Create a Mongoose model based on the schema
const Transaction = mongoose.model("Expenses", transactionSchema);

module.exports = Transaction;
