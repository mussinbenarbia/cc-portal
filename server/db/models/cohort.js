const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CohortSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  instructors: [{ type: Schema.Types.ObjectId, ref: "Instructor" }],
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Cohort", CohortSchema);
