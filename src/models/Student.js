const { Schema, model } = require("mongoose");

const StudentSchema = new Schema(
  {
    firstName: String,
    fatherLastName: String,
    motherLastName: String,
    address: {
      neighborhood: String,
      street: String,
      outside: Number,
      inside: String,
      zipCode: Number,
    },
    contact: [{ number: Number }],
    email: String,
    currentGrade: Number,
    careerKey: String,
  },
  { timestamps: true }
);

module.exports = model("Student", StudentSchema);
