const { Schema, model } = require("mongoose");

const CarreraSchema = new Schema(
  {
    carrera: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = model("Carrera", CarreraSchema);