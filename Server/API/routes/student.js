const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/studentController")

FIXME: router.get("/:studentid", StudentController.get_student_byId);

router.get("/school/:schoolid", StudentController.get_students_in_school);

module.exports = router;
