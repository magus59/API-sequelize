const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); 
app.use(cors());
// app.use(cors({
//   origin: '*',
//   methods: 'GET,POST,PATCH,DELETE' 
// }));

const StagiairesRoutes = require("./Route/StagiairesRoute");
app.use("/stagiaires", StagiairesRoutes);

const UserRoutes = require("./Route/UserRoutes");
app.use("/users", UserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Le serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
  );
});
