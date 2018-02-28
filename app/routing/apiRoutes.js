var users = require("../data/friends");


module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        res.json(users);
    })
    app.post("/api/users", function(req, res) {
        users.push(req.body);
        for (var i = 0; i < users[users.length - 1]["scores"].length; i++) users[users.length - 1]["scores"][i] = parseInt(users[users.length - 1]["scores"][i], 10);

        var sm = diff(users);
        console.log(users)
        console.log(sm)
        var data = {
            number: sm,
            name: users[sm]["name"]
        }
        res.json(data);
    })

}

function diff(user) {
    var num = [];
    for (var j = 0; j < user.length - 1; j++) {
        var dif = 0;
        for (var z = 0; z < user[j]["scores"].length; z++) {
            dif = Math.abs(user[user.length - 1]["scores"][z] - user[j]["scores"][z]) + dif;
        }
        num.push(dif);
    }
    var smNUM = Math.min(...num);
    console.log(num)
    return num.indexOf(smNUM);
}