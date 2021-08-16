const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT;
// Port
app.listen(PORT, ()=> {
    console.log(`===> Listening to Port ${PORT}`)
});