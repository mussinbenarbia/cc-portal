const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  github: String,
  linkedin: String,
  twitter: String,
  cohort: String,
  motto: String,
});

module.exports = mongoose.model("Student", StudentSchema);
