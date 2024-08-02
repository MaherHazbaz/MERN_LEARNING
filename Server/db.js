const { default: mongoose } = require("mongoose");

const db = async () => {
  try {
    const res = await mongoose.connect("mongodb://localhost:27017/Mern");
    if (res) {
      console.log("connected");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
