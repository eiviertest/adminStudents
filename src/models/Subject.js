const { Schema, model } = require("mongoose");

const AsignaturaSchema = new Schema(
  {
    name: String,
    grade: Number,
    careerKey: String,
  },
  { timestamps: true }
);

module.exports = model("Asignatura", AsignaturaSchema);
