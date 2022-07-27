let character = document.getElementById('character');
let block = document.getElementById('block');
let counter = 0;
let score = document.getElementById('score');
score.style.display = 'none';
block.style.display = 'none';

//get our backgrounds
let ground = document.getElementById("ground");
let treesAndBushes = document.getElementById("trees_and_bushes");
let distantTrees = document.getElementById("distant_trees");
let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let hugeClouds = document.getElementById("huge_clouds");
let clouds = document.getElementById("clouds");
let distantClouds = document.getElementById("distant_clouds");

//get the button
let startBtn = document.getElementById("start-button");

//get div button start
let startDiv = document.getElementById("start");

function start() {
    ground.style.animation ="loop 9s linear infinite";
    treesAndBushes.style.animation ="loop 7s linear infinite";
    distantTrees.style.animation ="loop 6s linear infinite";
    hill1.style.animation ="loop 5s linear infinite";
    hill2.style.animation ="loop 5s linear infinite";
    hugeClouds.style.animation ="loop 4s linear infinite";
    clouds.style.animation ="loop 4s linear infinite";
    distantClouds.style.animation ="loop 4s linear infinite";
    character.style.backgroundImage = "url(images/run.gif)";
    score.style.display = "block";
}

function pause() {
    ground.style.animation ="none";
    treesAndBushes.style.animation ="none";
    distantTrees.style.animation ="none";
    hill1.style.animation ="none";
    hill2.style.animation ="none";
    hugeClouds.style.animation ="none";
    clouds.style.animation ="none";
    distantClouds.style.animation ="none";
    character.style.backgroundImage = "none";
    startDiv.style.display="block";
    startBtn.setAttribute('value',
        'RESTART');
    character.style.backgroundImage = "url(images/idle.gif)";
    block.style.display ="none";
    score.style.display = "none";
}


startBtn.addEventListener("click", ()=>{
    startDiv.style.display="none"
    block.style.display ="block";
    start();
});

function escape(e) {
    if(e.keyCode === 27){
        pause();
    }
};

document.addEventListener("keydown", escape);


function spaceBar(e) {
    if(e.keyCode === 32){
        jumping();
    }
};
document.addEventListener("keydown", spaceBar);


function jumping() {
    character.classList.add("animate-jump");
    character.style.backgroundImage = "url(images/jump.gif)";
    setTimeout(function (){
        character.classList.remove("animate-jump");
        character.style.backgroundImage = "url(images/run.gif)";
    }, 800);
};

setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft <50 && blockLeft >0 && characterTop >= 550){

        alert("Game Over. score: "+Math.floor(counter/100));
        counter = 0;
        block.style.animation = "block 3s infinite linear";
        character.classList.add("animate-dead");
        character.style.backgroundImage = "url(images/dead.gif)";
        setTimeout(function (){
            character.classList.remove("animate-dead");
            character.style.backgroundImage = "url(images/idle.gif)";
        }, 800);
    }else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }

},10);



