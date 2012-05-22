config = require('./config')
Trello = require('./trello');


Trello.get("/1/members/me", function(err, data) {
  if (err) throw err;
  console.log(data);
});

