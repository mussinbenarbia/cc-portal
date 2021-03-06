const mongoose = require("mongoose");
const Cohort = require("../models/cohort");
const Student = require("../models/student");
const Instructor = require("../models/instructor");
const { cohortsData, studentsData, instructorsData } = require("./data");

mongoose.connect("mongodb://localhost:27017/cc-portal", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("Oh no there was an error");
});
db.once("open", () => {
  console.log("Successfully connected");
});

const deleteEverything = async () => {
  await Cohort.deleteMany({});
  await Student.deleteMany({});
  await Instructor.deleteMany({});
};

const seedDB = async () => {
  await Cohort.deleteMany({});
  await Student.deleteMany({});
  await Instructor.deleteMany({});

  for (let cohort of cohortsData) {
    let cohortObj = new Cohort(cohort);
    await cohortObj.save();
  }

  for (let student of studentsData) {
    let studentObj = new Student(student);
    let cohort = await Cohort.findOne({ name: student.cohort });
    cohort.students.push(studentObj);
    await cohort.save();
    await studentObj.save();
  }

  for (let instructor of instructorsData) {
    const instructorObj = new Instructor(instructor);
    for (let taughtCohort of instructor.cohorts) {
      const cohort = await Cohort.findOne({ name: taughtCohort });
      cohort.instructors.push(instructorObj);
      await cohort.save();
    }
    await instructorObj.save();
  }
};

seedDB();
//deleteEverything();
