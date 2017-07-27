var profiles = require('../models/profiles.js')

module.exports = {
  getFriendsProfiles: function (req, res) {
    var user = req.session.currentUser;
    var friends = user.friends;
    var friendProfile = [];

    for (var friend of friends) {
      for (var profile of profiles) {
        if (profile.name === friend)  {
          friendProfile.push(profile)
        }
      }
    }
    return res.status(200).json({ currentUser: user, friends: friendProfile })
  }
}
 
