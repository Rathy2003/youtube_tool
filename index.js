const express = require("express");
require("dotenv").config()

const app = express();
let router = require("./route.js");
// Youtube Tool
app.use("/youtube",router);

const PORT = process.env.PORT || 8080

app.listen(PORT)