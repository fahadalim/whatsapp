const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://whatsapp:3GqA3SpjQvt7o2LU@cluster0.tdwvk1x.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;


// 3GqA3SpjQvt7o2LU