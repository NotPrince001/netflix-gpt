const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
const validate = require("../middleware/validate");
const { loginSchema, signupSchema } = require("../utils/validator");

router.post("/register", validate(signupSchema), async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists!" });
    }
    const user = await User.create({
      fullName,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User successfully registered!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", validate(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    console.log(existingUser);
    res.status(200).send(existingUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
