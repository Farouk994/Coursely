const mongoose = require("mongoose").set("debug", true);;
const config = require("config");

// Get
const db = config.get("mongoURI");

// Connection to database
const connectDB = async () => {
   try {
      await mongoose.connect(db, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });
      console.log("MongoDB connected <===");
   } catch (err) {
      console.log(err.message);
      process.exit(1);
   }
};

module.exports = connectDB;
