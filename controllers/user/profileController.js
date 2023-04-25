const dataMapper = require("../../data/dataMapper/users/profiles");


const profileController = {
  async findAll(req, res) {
    const profiles = await dataMapper.findAll();
    res.send(profiles);
  },

  async addProfile(req, res) {
    const { profile } = req.body;
    const length = profile.length

    const newProfile = await dataMapper.addOne({ id: length + 1, label: profile });
    res.send(newProfile);
    console.log('Sending new profile:', newProfile)
    console.log(" req.body:", req.body.profile)

  },
  async deleteProfile(req, res) {
const profile = req.params.profile
    const deletedProfile =   await dataMapper.deleteOne((profile));
    res.send(deletedProfile)

  }
};

module.exports = profileController;
