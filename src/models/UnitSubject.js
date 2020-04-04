const { Schema, model } = require("mongoose");

const UnitSubjectSchema = new Schema(
  {
    subjectID: String,
    noUnit: Number,
    nameUnit: String,
    hoursUnit: Number,
    hoursWeek: Number,
  },
  { timestamps: true }
);

module.exports = model("UnitSubject", UnitSubjectSchema);
