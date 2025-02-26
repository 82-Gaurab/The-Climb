const User = require("../model/userSchema");
const { generateToken } = require("../security/jwt-util");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    // Fetch user from database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare hashed passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = generateToken({ user: user.toJSON() });

    return res.status(200).json({
      data: { access_token: token, role: user.role, userId: user.userId },
      message: "Successfully logged in",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to login" });
  }
};

const init = async (req, res) => {
  try {
    const user = req.user.user;
    delete user.password; // Ensure password is not exposed
    res.status(200).json({ data: user, message: "Successfully fetched current user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = { login, init };
