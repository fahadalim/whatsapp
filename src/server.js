const app = require("./index");
const connect = require("./configs/db");
require('dotenv').config()

// const port = 5000

let p = process.env.port||5000;

app.listen(p, async () => {
  try {
    await connect();
    console.log("listening to 5000");
  } catch (err) {
    console.log(err);
  }
});
