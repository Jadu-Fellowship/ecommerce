const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");

const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(3001, console.log("Server Started!!"));
