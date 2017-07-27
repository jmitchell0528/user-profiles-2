var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var path = require('path');
var port = 3000;

var app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(bodyParser.json());
app.use(cors(corsOptions)); //<---we don't have to write custom middleware like in the personal api project.
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

//routes
app.get('/api/profiles', profileCtrl.getFriendsProfiles);
app.post('/api/login', userCtrl.login);


app.listen(port, function() {
  console.log("listening on port", port);
});
