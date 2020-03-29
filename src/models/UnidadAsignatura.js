const { Schema, model } = require("mongoose");

const UnidadAsignaturaSchema = new Schema(
  {
    ClaveAsignatura: { type: String, required: true },
    NumUnidad: { type: Number, required: true },
    NombreUnidad: { type: String, required: true },
    HorasUnidad: { type: Number, required: true },
    HorasSemana: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = model("UnidadAsignatura", UnidadAsignaturaSchema);
