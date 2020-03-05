var min = 1;
var max = 10;
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var upperCounter;
var lowerCounter;
var checker;
var barSpeed = document.getElementById('changeInterval').value;
var numberOfBars = document.getElementById('changeBarCount').value;

var upperAxis = document.getElementById('upperAxis');
var lowerAxis = document.getElementById('lowerAxis');

var upperRanges = new Array();
var lowerRanges = new Array();

function getGeneratedNumbers() {
    if (upperRanges.length < numberOfBars && lowerRanges.length < numberOfBars) {
        console.log("tick");
        upperRanges.push(generateUpperNumbers(min, max));
        lowerRanges.push(generateLowerNumbers(min, max));
        barHandler();
    } else {
        clearInterval(upperCounter);
        clearInterval(lowerCounter);
        clearInterval(checker);
        console.log(upperRanges + " <== Upper Ranges");
        console.log(lowerRanges + " <== Lower Ranges");
    }
}

function generateUpperNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateLowerNumbers(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

start.addEventListener('click', function () {
    upperRanges = [];
    lowerRanges = [];
    barSpeed = document.getElementById('changeInterval').value;
    numberOfBars = document.getElementById('changeBarCount').value;
    clearInterval(upperCounter);
    clearInterval(lowerCounter);
    clearInterval(checker);
    upperCounter = setInterval(generateUpperNumbers, barSpeed);
    lowerCounter = setInterval(generateLowerNumbers, barSpeed);
    checker = setInterval(getGeneratedNumbers, barSpeed);
});

stop.addEventListener('click', function () {
    clearInterval(upperCounter);
    clearInterval(lowerCounter);
    clearInterval(checker);
})

var upperBars = upperAxis.children;
var lowerBars = lowerAxis.children;

function barHandler() {
    for (var i = 0; i < upperBars.length; i++) {
        upperBars[i].style.height = upperRanges[i] * 10 + "%";
        lowerBars[i].style.height = lowerRanges[i] * 10 + "%";
    }
}