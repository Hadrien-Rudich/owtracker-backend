const dataMapper = require("../../data/dataMapper/heroes/roles");

const roleController = {
  async findAll(req, res) {
    const roles = await dataMapper.findAll();
    res.send(roles);
    console.log("Finding All Roles");
  },
};

module.exports = roleController;
