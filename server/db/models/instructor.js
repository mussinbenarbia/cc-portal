const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  name: String,
  picture: String,
  github: String,
  linkedin: String,
  twitter: String,
  medium: String,
  quote: String,
});

module.exports = mongoose.model("Instructor", InstructorSchema);
