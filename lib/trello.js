var Trello = require("node-trello");
module.exports = new Trello(config.secrets.trello.api_key, config.secrets.trello.token);

