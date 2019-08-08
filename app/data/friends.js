var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var profiles = [
    {
        "name": "Michael Scott",
        "picture": "img",
        "scores": [
            1,
            3,
            4,
            2,
            2,
            2,
            3,
            1,
            1,
            1
        ]
    },
    {
        "name": "Dwight Schrute",
        "picture": "img",
        "scores": [
            5,
            5,
            5,
            5,
            4,
            3,
            4,
            5,
            5,
            5
        ]
    },
    {
        "name": "Michael Scott",
        "picture": "img",
        "scores": [
            3,
            3,
            3,
            2,
            4,
            3,
            3,
            3,
            2,
            4
        ]
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.post("/api/profiles", function (req, res) {
    var newProfile = req.body;

    newProfile.routeName = newProfile.name.replace(/\s+/g, "").toLowerCase();

    console.log(newProfile);

    characters.push(newProfile);

    // Need something for the popup here
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
