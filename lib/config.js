(function() {
  var env, fs, path, secrets;

  path = require('path');

  fs = require('fs');

  secrets = JSON.parse(fs.readFileSync('config/secrets.json'));

  module.exports = {
    root: path.resolve('.'),
    port: 1330,
    // db: {
    //   database: "son_of_feedlot_" + env,
    //   user: secrets.db.user,
    //   password: secrets.db.password
    // },
    secrets: secrets
  };

}).call(this);