const dataMapper = require('../data/dataMapper/history')

const historyController = {

async findAll(req, res) {

const history = await dataMapper.findAll()
res.send(history)
},
};

module.exports = historyController;