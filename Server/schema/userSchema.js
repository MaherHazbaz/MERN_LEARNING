const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, default: "" },
    user_email: { type: String, required: true, unique: true },
    user_password: { type: String, required: true },
    user_address: {
      doorNumber: { type: String, default: "" },
      pinCode: { type: String, default: "" },
      street: { type: String, default: "" },
      city: { type: String, default: "" },
      locality: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
