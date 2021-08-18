const express = require("express");
const  connectDB  = require("./config/db");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/school", require("./Server/API/routes/school"));
app.use("/api/student", require("./Server/API/routes/student"));

const PORT = process.env.PORT || 8080;
// Port
const server = app.listen(PORT, () => {
   console.log(`===> Listening to Port ${PORT}`);
});

module.exports = server;