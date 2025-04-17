const express = require("express");
const StagiairesController = require("../Controller/StagiairesController");
const router = express.Router();

router.get("/", (req, res) => {
  StagiairesController.getAllStagiaires(req, res);
});

router.post("/", (request, response) => {
  StagiairesController.addStagiaires(request, response);
});

module.exports = router;
