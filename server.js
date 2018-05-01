// SERVER ACTION!

// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');

// SETS UP THE EXPRESS APP
var app = express();
var PORT = process.env.PORT || 8000;
// REQUIRING MODELS FOR SYNCING
var db = require('./models');

// MIDDLEWARE FOR DATA PARSING
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// STATIC DIRECTORY
app.use(express.static('public'));

// ROUTES
require("./routes/task-api-routes.js")(app);
require('./routes/org-api-routes.js')(app);
require('./routes/vol-api-routes.js')(app);

// SYNCING SEQUELIZE MODELS AND THEN STARTING OUR EXPRESS APP
db.sequelize.sync({}).then(function() {
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});