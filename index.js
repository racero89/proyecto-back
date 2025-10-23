const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const registroRoutes = require("./routes/registroRoutes");

if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("Error: Faltan variables de entornos");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando correctamente");
});

app.use("/api/auth", authRoutes);
app.use("/api/registros", registroRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Error del servidor" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
