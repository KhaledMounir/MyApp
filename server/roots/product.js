const express = require("express");

const Product = require("../models/Product");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, desc, img, price } = req.body;

    const newPost = await Product({ title, desc, img, price });

    const savePost = await newPost.save();

    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
