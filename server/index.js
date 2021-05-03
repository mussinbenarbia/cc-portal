const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Student = require("./db/models/student");
const Instructor = require("./db/models/instructor");
const Cohort = require("./db/models/cohort");

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

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.get("/students", async (req, res) => {
  const allStudents = await Student.find();
  res.json(allStudents);
});

app.get("/instructors", async (req, res) => {
  const allInstructors = await Instructor.find();
  res.json(allInstructors);
});

app.get("/cohorts", async (req, res) => {
  const allCohorts = await Cohort.find();
  for (let cohort of allCohorts) {
    await cohort
      .populate("instructors")
      .populate("students")
      .execPopulate();
  }

  res.json(allCohorts);
});

app.post("/students", (req, res) => {});

app.post("/instructors", (req, res) => {});

app.post("/cohorts", (req, res) => {});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
