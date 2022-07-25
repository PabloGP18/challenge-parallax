// get our character
let character = document.getElementById("idle")

// jump function
function jumping() {
    character.classList.add("animate-jump")
    character.style.backgroundImage = "url(images/jump.gif)"
    setTimeout(function (){
        character.classList.remove("animate-jump")
        character.style.backgroundImage = "url(images/run.gif)"
    }, 800)
}

window.addEventListener("keydown", function(event) {
    jumping();
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }
});
//document.addEventListener('click', jumping);
