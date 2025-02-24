const User = require("../model/userSchema");

const create = async (req, res) => {
  try {
    const body = req.body;
    console.log(req.body);

    if (!body?.username || !body?.email || !body?.password) {
      return res.status(500).send({ message: "Invalid" });
    }

    const users = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
    });
    res.status(201).send({ data: users, message: "successfully created user" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await User.destroy({
      where: { userId: userId },
    });

    if (result === 0) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete user" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      include: {
        model: UserProfile,
        as: "profile",
      },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch users" });
  }
};

module.exports = { create, deleteUser, getAllUsers };
