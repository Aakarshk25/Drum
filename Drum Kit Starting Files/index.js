// how add eventlistnerwork.
//he addEventListener() method of the EventTarget interface sets up a 
//function that will be called whenever the specified event is delivered to the target.
//Common targets are Element, or its children, Document, and Window,
// but the target may be any object that supports events (such as XMLHttpRequest).





// document.querySelector("button").addEventListener("click", function () {
//     var buttons = document.querySelectorAll("button");
//     for (var i = 0; i < buttons.length; i++) {
//         alert("hi");
//     }

// }

var numberOfbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
        
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnnimation(event.key);
    
});



function makeSound(key) {
    
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnnimation(currentKey) {
   var activeButton =  document.querySelector("."+ currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function name(params) {
    activeButton.classList.remove("pressed");
    
   },100);

    
}
