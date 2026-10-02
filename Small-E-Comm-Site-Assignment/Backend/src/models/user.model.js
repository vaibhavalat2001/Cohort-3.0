import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
    },
  
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

const userModel = mongoose.model("users", userSchema);

export default userModel;
