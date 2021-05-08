const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    msg: "Product Added!",
  });
});

router.get("/", (req, res) => {
  res.json({
    msg: "All Products Fetched!",
  });
});

router.get("/:id", (req, res) => {
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
