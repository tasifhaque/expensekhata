import mongoose from "mongoose";

const transactionsSchema = new mongoose.Schema(
  {
    amount: { type: Number, require: true },
    slug: String,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    description: String,
    date: { type: Date, require: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Transactions = mongoose.model("Transactions", transactionsSchema);
