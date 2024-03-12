var drumnum = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumnum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var innerhtml = this.innerHTML;
        MakeSound(innerhtml, this);
    });
}

document.addEventListener("keydown", function (event) {
    MakeSound(event.key, document.querySelector(".drum[data-key='" + event.key + "']"));
});

function MakeSound(key, clickedElement) {
    var audio;

    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
            break;
        default:
            break;
    }
    function getRandomColor() {
        
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
      
        
        var colour = "rgb(" + red + "," + green + "," + blue + ")";
      
        return colour;
      }

    if (audio) {
        audio.play();
        clickedElement.classList.add("bright");
        setTimeout(function () {
            clickedElement.classList.remove("bright");
        }, 300);
        document.querySelector("#title").style.color=getRandomColor()
    }
    
    

      
    
}

