const { Schema, model } = require("mongoose");

const SubjectSchema = new Schema(
  {
    name: String,
    grade: Number,
    careerID: String,
  },
  { timestamps: true }
);

module.exports = model("Subject", SubjectSchema);
