const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/users", (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error al leer db.json" });
    }

    try {
      const db = JSON.parse(data);
      res.json(db.users || []);
    } catch (parseError) {
      res.status(500).json({ error: "Error al procesar los datos" });
    }
  });
});

app.get("/users/count", (req, res) => {
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error al leer db.json" });
    }

    try {
      const db = JSON.parse(data);
      const total = db.users?.length || 0;
      res.send(total.toString() || "0");
    } catch (parseError) {
      res.status(500).json({ error: "Error al procesar los datos" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
