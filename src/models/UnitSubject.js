const { Schema, model } = require("mongoose");

const UnidadAsignaturaSchema = new Schema(
  {
    ClaveAsignatura: String,
    NumUnidad: Number,
    NombreUnidad: String,
    HorasUnidad: Number,
    HorasSemana: Number,
  },
  { timestamps: true }
);

module.exports = model("UnidadAsignatura", UnidadAsignaturaSchema);
