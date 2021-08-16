const Student = require("../../models/Student");
const School = require("../../models/School");

//? @route GET api/student/student:id
//? @desc Get student by Id
//? @Private / Public

exports.get_student_byId = async (req, res) => {
   try {
      const student = await Student.findById(req.params.studentid);
      if (!student) {
         return res
            .status(404)
            .json({ msg: "Student can't be found, try again" });
      }
      res.json({ student: student.toObject({ getters: true }) });

      console.log(student);
      if (!student) {
         res.status(400).json({ msg: "Student Not Found yet" });
      }
   } catch (err) {
      console.log(err.message);
      if (err.kind === "ObjectId") {
         return res.status(404).json({ msg: "Student not found, try again" });
      }
      res.status(500).send("Server Error");
   }
};

//? @route api/student/school/:id
//? @desc Get all students in school
//? @access Private / Public

exports.get_students_in_school = async (req, res) => {
   const schoolid = req.params.schoolid;
   try {
      const students = await Student.find({ schoolid });
      console.log(students);
      if (!students) {
         return res
            .status(400)
            .json({ msg: "There are no schools right now, try again" });
      }
      res.json({
         students: students.map((student) =>
            student.toObject({ getters: true })
         ),
      });
   } catch (err) {
      res.status(500).send("Server Error Issue");
   }
};
