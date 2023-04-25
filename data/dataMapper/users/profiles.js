const profileList = require('./profilesData')

const dataMapper = {

  async findAll() {
  
    const profiles = []
    for(profile of profileList) {
      profiles.push(profile)
    }
  
    return profiles
  },

  async addOne(profile) {
  
profileList.push(profile)      
return profileList
    },
  
    async deleteOne(profile) {
      const profileToBeDeleted = profileList.filter(p => p.label === profile)
      profileList.splice(profileToBeDeleted, 1)
      return profileList
    }
  
  };
  
  module.exports = dataMapper;