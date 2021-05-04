const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  name: String,
  github: String,
  picture: String,
  linkedin: String,
  twitter: String,
  cohorts: [String],
  quote: String,
});

module.exports = mongoose.model("Instructor", InstructorSchema);
