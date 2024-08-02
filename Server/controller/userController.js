const userModel = require("../schema/userSchema");

exports.createUser = async (req, res) => {
  const { user_email, password } = req.body;
  try {
    const user = await userModel.create({
      user_email,
      user_password: password,
    });

    if (user) {
      return res.status(201).send({ message: "created", data: user });
    }
    return res.status(400).send({ message: "failed" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
