const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    msg: "User Registered!",
  });
});

router.post("/login", (req, res) => {
  res.json({
    msg: "User Loggedin!",
  });
});

module.exports = router;
