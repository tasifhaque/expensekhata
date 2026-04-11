import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    type: String,
    icon: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, versionKey: false },
);

export const Category = mongoose.model("Category", categorySchema);
