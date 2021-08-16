const express = require("express");
const router = express.Router();

const SchoolController = require("../controllers/schoolController");

router.post("/new", SchoolController.add_school);

router.get("/all", SchoolController.schools_get_all);

router.get("/:schoolid", SchoolController.get_school_byId);

router.post("/add/:schoolid", SchoolController.add_student_to_school);

module.exports = router;
