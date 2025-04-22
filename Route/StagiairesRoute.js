const express = require("express");
const StagiairesController = require("../Controller/StagiairesController");
const router = express.Router();
// const verifyToken = require("../middlewares/verifyToken");


router.get("/", (req, res) => {
  StagiairesController.getAllStagiaires(req, res);
});

router.post("/", (request, response) => {
  StagiairesController.addStagiaires(request, response);
});

router.get("/:id", (request, response) => {
    StagiairesController.getAllStagiairesById(request, response);
});

module.exports = router;
