var lightOff = true;
var button = document.getElementById("lightSwitch");
var bulb = document.getElementById("lightBulb");

function lightOn() {
    if(lightOff) {

        button.innerHTML = "i";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        bulb.style.backgroundColor = "yellow";
        lightOff = false;

    } else {

        button.innerHTML = "I";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        bulb.style.backgroundColor = "grey";
        lightOff = true;
    }
}