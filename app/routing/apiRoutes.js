var users = require("../data/friends");
module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        res.json(users);
    })
    app.post("/api/users", function(req, res) {
        users.push(req.body);
        console.log(req.body)
        console.log(users[users.length - 1]["scores[]"]);
        res.json(true);
    })

}

function diff() {

}