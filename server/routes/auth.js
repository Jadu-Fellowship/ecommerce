const express = require("express");
const jwt = require("jsonwebtoken");
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
      const jwtUser = {
        id: user.id,
        email: user.email,
      };

      jwt.sign({ ...jwtUser }, "secretKey", (err, token) => {
        if (err) {
          return res.status(500).json({
            error: "Something went wrong",
          });
        }

        return res.json({ token });
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
