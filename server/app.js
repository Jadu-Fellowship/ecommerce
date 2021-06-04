const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

makeConnection();

async function makeConnection() {
  await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, () => {
    console.log("Database Connected!");
    app.listen(3001, console.log("Server Started!!"));
  });
}
