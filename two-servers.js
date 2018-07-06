// Require HTTP
var http = require("http");

// Define port
var PORTa = 7000;
var PORTb = 7500;

var goodThingsArr = ["You're an awesome friend.",
"You're a gift to those around you.",
"You're a smart cookie.",
"You are awesome!",
"You have impeccable manners.",
"I like your style."];

var badThingsArr = ["If laughter is the best medicine, your face must be curing the world.",
    "You're so ugly, you scared the crap out of the toilet.",
    "Your family tree must be a cactus because everybody on it is a prick.",
    "No I'm not insulting you, I'm describing you.",
    "It's better to let someone think you are an Idiot than to open your mouth and prove it."]

// gen request/response function to say good things
function goodThings(request, response) {
    var i = Math.floor(Math.random()* goodThingsArr.length);
    // Say good things about user
    response.end("Welcome " + request.url + "\n" + goodThingsArr[i]);
}

function badThings(request, response) {
    var i = Math.floor(Math.random()* badThingsArr.length);
    response.end("Welcome " + request.url  + "\n" + badThingsArr[i]);
}

// create server
var serverA = http.createServer(goodThings);
var serverB = http.createServer(badThings);

// start servers
serverA.listen(PORTa, function() {
    // log on server once started
    console.log("Server listening on http://localhost:" + PORTa);
});

serverB.listen(PORTb, function() {
    // log on server once started
    console.log("Server listening on http://localhost:" + PORTb);
});

