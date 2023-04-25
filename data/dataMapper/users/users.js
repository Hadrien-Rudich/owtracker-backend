const usersList = require('./usersData')

const dataMapper = {

  async findAll() {
  
    const allUsers = []
    for(user of usersList) {
      allUsers.push(user)
    }
  
    return allUsers
  },

  
  async findById(id) {
const user = usersList.filter(user => user.id === id)
return user

  }
  };
  
  module.exports = dataMapper;