const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
   },
   name: {
      type: String,
   },
   description: {
      type: String,
   },
   location: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now(),
   },
   students: [
      {
         user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
         },
         name: {
            type: String,
         },
         course: [
            {
               subject: {
                  type: String,
               },
            },
            {
               grade: {
                  type: Number,
               },
            },
         ],
         city: {
            type: String,
         },
         school: {
            type: String,
         },
      },
   ],
});

const school = mongoose.model("school", SchoolSchema);

module.exports = school;
