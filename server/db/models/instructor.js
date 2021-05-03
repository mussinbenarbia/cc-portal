const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  name: String,
  github: String,
  linkedin: String,
  twitter: String,
  cohorts: [String],
  motto: String,
});

module.exports = mongoose.model("Instructor", InstructorSchema);
