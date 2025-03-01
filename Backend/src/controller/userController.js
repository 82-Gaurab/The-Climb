const Users = require("../model/userSchema");
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  try {
    const body = req.body;
    console.log(req.body);

    if (!body?.username || !body?.email || !body?.password) {
      return res.status(500).send({ message: "Invalid" });
    }

    const hashPassword = await bcrypt.hash(body.password, 10);

    const users = await Users.create({
      username: body.username,
      email: body.email,
      password: hashPassword,
    });
    res.status(201).json({ data: users, message: "successfully created user" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch users" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const result = await Users.destroy({
      where: { userId: userId },
    });

    if (result === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete user" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json({ data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to fetch users" });
  }
};

module.exports = { create, deleteUser, getAllUsers };
