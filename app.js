const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({path:'./.env'});
mongoose
  .connect("mongodb://localhost:27017/Gallery", {
    useNewUrlParser: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));


app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./route/image"));

app.listen(5000, () => console.log("Server is running"));
