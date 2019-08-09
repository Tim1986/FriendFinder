var profiles = require("../data/friends.js")

module.exports = function (app) {
    app.post("/api/profiles", function (req, res) {
        var newProfile = req.body;

        newProfile.routeName = newProfile.name.replace(/\s+/g, "").toLowerCase();

        // console.log(newProfile);

        // compatiblity logic here

        function checkScores(num) {
            var totalDiff = 0
            for (var j = 0; j < 10; j++) {
                var qdiff = Math.abs(parseFloat(profiles[num].scores[j]) - parseFloat(newProfile.scores[j]))
                totalDiff += qdiff
            }
            // console.log(totalDiff + " is totalDiff at " + i)
            return totalDiff
        }

        var bestFitNum = 100
        var bestFitName = ""
        var bestFitIndex = ""
        var bestFitImage = ""

        for (var i = 0; i < profiles.length; i++) {
            if (checkScores(i) < bestFitNum) {
                bestFitNum = checkScores(i);
                bestFitName = profiles[i].name
                bestFitIndex = i
                bestFitImage = profiles[i].image
            }
        }

        // modal here
        // document.getElementById("#exampleModalLong").modal();
        // $("#exampleModalLong").modal();
        // data-toggle="modal" data-target="#exampleModalLong"

        res.json(profiles[bestFitIndex]);
    });
    app.get("/api/friends", function (req, res) {
        res.json(profiles);
    });

}
