const StagiaireService = require("../Service/StagiaresService");

class StagiaireController {
  async getAllStagiaires(req, res) {
    try {
      const stagiaires = await StagiaireService.getAllStagiaires();

      res.json(stagiaires);
    } catch (error) {
      console.log(error);
      console;
      res.status(500);
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }

  async addStagiaires(request, response){
    try {
        const Stagiaires = await StagiaireService.addStagiaires(request.body);
        response.json(Stagiaires);
    } catch (error) {
        response.status(500);
        response.json({error : "Une erreur est survenue lors de l'ajout du Stagiaires"})
    }
}
}
module.exports = new StagiaireController();
