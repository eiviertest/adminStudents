const { Schema, mode } = require("mongoose");

const AlumnoSchema = new Schema(
    {
        Nombre: { type: String, required: true },
        ApePaterno: { type: String, required: true },
        ApeMaterno: { type: String },
        Domicilio: {
            colonia: { type: String, required: true },
            calle: { type: String, required: true },
            no_Ext: { type: Number, required: true },
            no_Int: { type: String },
            CP: { type: Number, required: true }
        },
        contacto : [{ telefono: { type: Number }}],
        Email: { type: String, required: true },
        CuatrimestreActual: { type: Number, required: true },
        ClaveCarrera: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = model("Alumno", AlumnoSchema);