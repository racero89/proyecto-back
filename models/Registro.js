const mongoose = require("mongoose");

const entradasSalidasSchema = new mongoose.Schema({
  entrada: { type: String, required: true },
  salida: { type: String, default: null },
});

const registroSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fecha: { type: String, required: true },
  entradasSalidas: [entradasSalidasSchema],
});

module.exports = mongoose.model("Registro", registroSchema);
