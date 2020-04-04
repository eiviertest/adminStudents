const { Schema, model } = require("mongoose");

const CalificacionSchema = new Schema(
  {
    Matricula: String,
    ClaveAsignatura: String,
    NumUnidad: Number,
    CalifOrdinario: Number,
    CalifR1: Number,
    CalifR2: Number,
    CalifGlobal: Number,
  },
  { timestamps: true }
);

module.exports = model("Calificacion", CalificacionSchema);
