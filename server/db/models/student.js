const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  github: String,
  picture: String,
  cohort: String,
  linkedin: String,
  twitter: String,
  medium: String,
  quote: String,
});

module.exports = mongoose.model("Student", StudentSchema);
