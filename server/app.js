const express = require("express");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");

const app = express();

app.use("/auth", authRouter);
app.use("/products", productRouter);

app.listen(3001, console.log("Server Started!!"));
