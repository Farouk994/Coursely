const School = require("../../models/School");

//? @route GET api/school/all
//? @desc Get all schools
//? @access Public for now

exports.schools_get_all = async (req, res) => {
   try {
      const school = await School.find().sort({ date: -1 });
      res.json(school);
   } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
   }
};

//? @route api/school/new
//? @desc Post schools, only for Admin
//? @access Private

exports.add_school = async (req, res) => {
   try {
      // TODO: Will add User when i set up admin functionality
      const newSchool = new School({
         name: req.body.name,
         description: req.body.description,
         location:req.body.location,
      });
      const school = await newSchool.save();
      res.json(school);
      console.log(school);
   } catch (err) {
      console.log(err.message);
      res.status(500).json("Server error");
   }
};

//? @route GET api/school/:id
//? @desc Get school by ID
//? @access Private/Public

exports.get_school_byId = async (req, res) => {
   const schoolid = req.params.schoolid;
   let school;
   try {
      school = await School.findById(schoolid);
      if (!school) {
         return res
            .status(404)
            .json({ msg: "School not found, try again please" });
      }
      res.json({ school: school.toObject({ getters: true }) });
      console.log(school.students);
   } catch (err) {
      console.log(err.message);
      if (err.kind === "ObjectId") {
         return res.status(404).json({ msg: "ID not found, try again please" });
      }
      res.status(500).send("Server error");
   }
};

//? @route Post api/school/add/:schoolid
//? @desc Add student to school
//? @access Private/Public

exports.add_student_to_school = async (req, res) => {
   try {
      const school = await School.findById(req.params.schoolid);
      if (!school) {
         res.status(404).json({ msg: "School not found, try again" });
      }
      console.log(school);

      const newStudent = {
         name: req.body.name,
         school: school.name,
         city: req.body.city,
         course: {
            subject: req.body.subject,
            grade: req.body.grade,
         },
      };

      school.students.unshift(newStudent);
      await school.save();
      res.json({ school: school.toObject({ getters: true }) });
      console.log(newStudent);
   } catch (err) {
      res.status(500).send("Server Error, try again");
   }
};
