import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (pass) {
        if (!pass || pass.length < 5) {
          throw new Error("Password must be at least 5 characters long.");
        }
        return true;
      },
      message: "Password must be at least 5 characters long.",
    },
  },
}, { timestamps: true });
export const User = models.User || model('User', UserSchema);
