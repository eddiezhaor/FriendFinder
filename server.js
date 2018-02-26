var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('app/public'))
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});