const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName: userName });

    if (!user) return res.status(404).json("user not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("wrong credential");

    const token = jwt.sign(
      { id: user._id, username: user.userName },
      process.env.Token
    );

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// router.get("/find/:id", async (req, res) => {
//   res.status(200).json("hi");
// });

module.exports = router;
