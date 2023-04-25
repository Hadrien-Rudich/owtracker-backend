const mapsList = require('./mapsData')

const dataMapper = {

  async findAll() {
  
    const allMaps = []
    for(map of mapsList) {
      allMaps.push(map)
    }
  
    return allMaps
  },

  
  async findBySlug(slug) {
const map = mapsList.filter(map => map.slug === slug)
return map

  },
  async findByType(type) {
    const mapsByType = mapsList.filter(map => map.type === type)
return mapsByType

  },
  };
  
  module.exports = dataMapper;