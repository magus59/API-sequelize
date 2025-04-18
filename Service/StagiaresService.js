const {} = require("sequelize");
const Stagiaires = require("../Model/stagiaires");

class StagiairesService {
  async getAllStagiaires() {
    return await Stagiaires.findAll();
  }

  async addStagiaires(stagiaires) {
    return await Stagiaires.create(stagiaires);
  }

  async getAllStagiairesById(stagiairesId) {
    return await Stagiaires.findByPk(stagiairesId);
  }
}
module.exports = new StagiairesService();
