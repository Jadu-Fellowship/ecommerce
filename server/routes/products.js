const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

function verifyToken(req, res, next) {
  const tokenHeader = req.headers["authorization"];

  if (typeof tokenHeader !== "undefined") {
    const authToken = tokenHeader.split(" ");
    const token = authToken[1];
    jwt.verify(token, "secretKey", (err, data) => {
      if (err) {
        res.json({
          error: "Invalid Token",
        });
      }
      req.data = data;
      next();
    });
  } else {
    res.sendStatus(403);
  }
}
router.post("/", verifyToken, (req, res) => {
  console.log(req.data);
  res.json({
    msg: "Product Added!",
  });
});

router.get("/", verifyToken, (req, res) => {
  res.json({
    msg: "All Products Fetched!",
  });
});

router.get("/:id", verifyToken, (req, res) => {
  res.json({
    msg: "Specific Product Fetched!",
  });
});

router.put("/:id", (req, res) => {
  res.json({
    msg: "Specific Product Updated!",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    msg: "Specific Product Deleted!",
  });
});

module.exports = router;
