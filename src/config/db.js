import mongoose from "mongoose";
import { MONGO_URI } from "../common/constants";

const connectDB = async () => {
  try {
    mongoose.connect(MONGO_URI);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
