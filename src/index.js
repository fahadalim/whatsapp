const express = require("express");
const whatsappController = require("./controller/whatapp.controller");
const app = express();


app.use(express.json());

app.get("/" , (req,res) =>{
    return res.status(200).send("welcome")
})

app.use("/whatsapp", whatsappController);

module.exports = app;

