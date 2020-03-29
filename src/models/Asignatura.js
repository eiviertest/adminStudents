const { Schema, model } = require("mongoose");

const AsignaturaSchema = new Schema(
  {
    Nombre: { type: String, required: true },
    Cuatrimestre: { type: Number, required: true },
    ClaveCarrera: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Asignatura", AsignaturaSchema);
