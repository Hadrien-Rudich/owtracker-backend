const rolesList = require("./rolesData");

const dataMapper = {
  async findAll() {
    const allRoles = [];
    for (role of rolesList) {
      allRoles.push(role);
    }

    return allRoles;
  },
};

module.exports = dataMapper;
