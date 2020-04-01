const { Schema, model } = require("mongoose");

const CalificacionSchema = new Schema(
  {
    Matricula: { type: String, required: true },
    ClaveAsignatura: { type: String, required: true },
    NumUnidad: { type: Number, required: true },
    CalifOrdinario: { type: Number, required: true },
    CalifR1: { type: Number },
    CalifR2: { type: Number },
    CalifGlobal: { type: Number }
  },
  { timestamps: true }
);

module.exports = model("Calificacion", CalificacionSchema);
