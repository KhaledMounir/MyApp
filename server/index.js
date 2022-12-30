const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoot = require("./roots/user");
const productRoot = require("./roots/product");

dotenv.config();
const app = express();

//connection de base donnees
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log("db connected, server listen in port 5000");
  });
});

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoot);
app.use("/api/products", productRoot);
