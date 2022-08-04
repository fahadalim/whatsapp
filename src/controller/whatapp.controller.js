const express = require("express");
const Whatsapp = require("../models/whatsapp.models");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let product = await Whatsapp.create(req.body);
    return res.status(201).send({ data: product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    let product = await Whatsapp.find(req.body);
    return res.status(201).send({ data: product });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
