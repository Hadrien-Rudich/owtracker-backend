const dataMapper = require('../../data/dataMapper/users/users')

const userController = {

async findAll(req, res) {

const users = await dataMapper.findAll()
res.send(users)
},

async findOne(req, res) {

const id = Number(req.params.id)
const user = await dataMapper.findById(id)
res.send(user)
}
};

module.exports = userController;