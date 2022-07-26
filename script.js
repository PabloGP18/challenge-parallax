// get our character
let character = document.getElementById("idle");

//get our backgrounds
let ground = document.getElementById("ground");
let treesAndBushes = document.getElementById("trees_and_bushes");
let distantTrees = document.getElementById("distantTrees");
let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let hugeClouds = document.getElementById("huge_clouds");
let clouds = document.getElementById("clouds");
let distantClouds = document.getElementById("distant_clouds");


// jump function
function jumping() {
    character.classList.add("animate-jump");
    character.style.backgroundImage = "url(images/jump.gif)";
    setTimeout(function (){
        character.classList.remove("animate-jump");
        character.style.backgroundImage = "url(images/run.gif)";
    }, 800);
};

window.addEventListener("keydown", function(event) {
    jumping();
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }
});

var overlap = overlap
//document.addEventListener('click', jumping);
