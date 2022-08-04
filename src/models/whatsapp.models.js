const mongoose = require("mongoose");

const whatsappSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  body: { type: String, required: true },

},{
    versionKey:false,
    timestamps:true
}
);

const Whatsapp = mongoose.model("whatsapp", whatsappSchema);

module.exports = Whatsapp;
