const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde la API local" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
