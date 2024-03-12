import mongoose, { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

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

UserSchema.post('validate', function(user) {
  const notHashedPassword = User.password;
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(notHashedPassword, salt);
})

export const User = models.User || model('User', UserSchema);
