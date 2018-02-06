window.onload = function() {

    function pointsToPercent(points, total) {
        return (points / total) * 100;
    }

    function percentToLetter(percent) {
        if (percent >= 94 && percent <= 100) {
            return "A"
        } else if (percent >= 90 && percent <= 93) {
            return "A-"
        } else if (percent >= 87 && percent <= 89) {
            return "B+"
        } else if (percent >= 83 && percent <= 86) {
            return "B"
        } else if (percent >= 80 && percent <= 82) {
            return "B-"
        } else if (percent >= 77 && percent <= 79) {
            return "C+"
        } else if (percent >= 73 && percent <= 76) {
            return "C"
        } else if (percent >= 70 && percent <= 72) {
            return "C-"
        } else if (percent >= 67 && percent <= 69) {
            return "D+"
        } else if (percent >= 63 && percent <= 66) {
            return "D"
        } else if (percent >= 60 && percent <= 62) {
            return "D-"
        } else if (percent < 60) {
            return "F"
        } else {
            return "error"
        }
    };

    var select1 = document.getElementById('select1');

    var assignment1 = document.getElementsByClassName('assignment1');

    var originalPoints = [];

    var totalPoints = 98;

    for (var i = 0; i < assignment1.length; i++) {
        originalPoints.push(assignment1[i].value);
    };

    select1.onchange = function() {
        if (this.value === "points") {

            for (var i = 0; i < assignment1.length; i++) {
                assignment1[i].value = originalPoints[i].toString() + " pts";
            };


        } else if (this.value === "letter") {

            for (var i = 0; i < assignment1.length; i++) {
                assignment1[i].value = percentToLetter(originalPoints[i]);
            };

        } else if (this.value === "percent") {

            for (var i = 0; i < assignment1.length; i++) {
                assignment1[i].value = pointsToPercent(originalPoints[i], totalPoints).toFixed(1).toString() + " %"
            };

        } else if (this.value === "sbl") {

            for (var i = 0; i < assignment1.length; i++) {
                assignment1[i].value = (pointsToPercent(originalPoints[i], totalPoints)/25).toFixed(2)
            };

        }
    }




    console.log("working!");
}