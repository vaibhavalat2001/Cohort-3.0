import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);   
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log("error while connecting mongodb");
  }
};  

export default connectDB;
