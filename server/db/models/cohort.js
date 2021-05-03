const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CohortSchema = new Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  instructors: [{ type: Schema.Types.ObjectId }],
  students: [{ type: Schema.Types.ObjectId }],
});

module.exports = mongoose.model("Cohort", CohortSchema);
