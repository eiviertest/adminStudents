const { Schema, model } = require("mongoose");

const CareerSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = model("Career", CareerSchema);
