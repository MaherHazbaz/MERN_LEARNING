const bcrypt = require("bcryptjs");
const userModel = require("../schema/userSchema");
const { status } = require("../constants/StausCode");

exports.createUser = async (req, res) => {
  const { user_email, password } = req.body;
  try {
    const Exist = await userModel.findOne({ user_email });
    if (!Exist) {
      const user = await userModel.create({
        user_email,
        user_password: bcrypt.hashSync(password, 10),
      });

      if (user) {
        return res.status(201).send({ message: "created", data: user });
      }
      return res.status(400).send({ message: "failed" });
    }
    return res
      .status(400)
      .send({ message: `${Exist.user_email} already available` });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { user_email, password } = req.body;
  try {
    const Exist = await userModel.findOne({ user_email });
    if (Exist) {
      const passMatch = bcrypt.compareSync(password, Exist.user_password);
      if (passMatch) {
        return res.status(status.ok).send({ message: "Success", data: Exist });
      }
      return res.status(status.BadRequest).send({ message: "Invalid" });
    }
    return res.status(status.InternalServerError).send({ message: error.message });
  } catch (error) {}
};
