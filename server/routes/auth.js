const express = require("express");
const User = require("../model/user");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({
      email,
      password,
    });

    await user.save();
    res.json({
      msg: "User Registered!",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      error: "Something unexpected happened!",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid Email",
      });
    }

    console.log(user);
    if (password == user.password) {
      return res.json({
        msg: "Password Matched!",
      });
    } else {
      return res.json({
        error: "Invalid Password",
      });
    }
  } catch (error) {
    console.log("Something unexpected!!", error.message);
    return res.json({
      error: "Server Error",
    });
  }
});

module.exports = router;
