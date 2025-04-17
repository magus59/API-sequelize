const express = require("express");
const app = express();

app.use(express.json());

const StagiairesRoutes = require("./Route/StagiairesRoute");

app.use("/stagiaires", StagiairesRoutes);

app.get("/", (req, res) => {
    res.send("Hello World! test ok, nous pouvons continuer !");
  });


  app.listen(process.env.PORT, () => {
    console.log(`✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`);
  });