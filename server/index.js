const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
const Student = require("./db/models/student");
const Instructor = require("./db/models/instructor");
const Cohort = require("./db/models/cohort");
const User = require("./db/models/user");
const passport = require("passport");
const passportLocal = require("passport-local");
const student = require("./db/models/student");

mongoose.connect("mongodb://localhost:27017/cc-portal", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const app = express();

const sessionConfig = {
  secret: "testSecret123",
  resave: true,
  saveUninitialized: true,
};

app.use(morgan("tiny"));
app.use(cors({ credentials: true, origin: "http://localhost:8080" }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.post("/students", async (req, res) => {
  const newStudent = new Student(req.body);
  const cohort = await Cohort.findOne({ name: newStudent.cohort });
  cohort.students.push(newStudent);
  await newStudent.save();
  await cohort.save();
  res.sendStatus(200);
});

app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;
  const studentToDelete = await Student.findByIdAndDelete(id);
  res.sendStatus(200);
});

app.post("/instructors", async (req, res) => {
  const newInstructor = new Instructor(req.body);
  await newInstructor.save();
  res.sendStatus(200);
});

app.delete("/instructors/:id", async (req, res) => {
  const { id } = req.params;
  const instructorToDelete = await Instructor.findByIdAndDelete(id);
  res.sendStatus(200);
});

app.post("/cohorts", async (req, res) => {
  const newCohort = new Cohort(req.body);
  newCohort.save();
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username });
  const registeredUser = await User.register(user, password);
  res.sendStatus(200);
});

app.get("/login", async (req, res) => {
  if (req.isAuthenticated()) return res.sendStatus(200);
  return res.sendStatus(401);
});

app.post("/login", passport.authenticate("local"), async (req, res) => {
  console.log(req.user);
  res.json({ message: "You are now logged in." });
});

app.get("/logout", async (req, res) => {
  req.logout();
  res.sendStatus(200);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
