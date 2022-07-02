import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL)
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
