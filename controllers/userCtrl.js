var users = require('../models/users.js')

module.exports = {
  login: function(req, res) {
    if (req.body.name)  {
      users.find(function(cur, idx, arr)  {
        console.log(cur.name, req.body.name, cur.password, req.body.password);
        if (req.body.name === cur.name && req.body.password === cur.password) {
          console.log(cur);
          req.session.currentUser = cur;

          return res.status(200).json({ userFound: true });
        }
      })
    }
    else {
      return res.status(500).json({ userFound: false})
    }
  }
};
