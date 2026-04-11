import mongoose from "mongoose";
import { env } from "@/config/env";

const connectDB = async () => {
  await mongoose.connect(env.DATABASE_URL);
};

mongoose.connection.on("connected", () => {
  console.info("Mongoose connected successfully!");
});

mongoose.connection.on("disconnected", () => {
  console.info("Mongoose disconnected!");
});

export { connectDB };
