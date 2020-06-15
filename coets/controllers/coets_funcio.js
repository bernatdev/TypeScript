"use strict";
var rocketArray = [];
function create() {
    var i;
    var rocketAmount = parseInt(document.getElementById("rocket_amount").value);
    for (i = 0; i < rocketAmount; i++) {
        document.getElementById("creators").innerHTML +=
            "<button type='button' class='btn btn-danger' id='creator" + i + "' onclick='createRocket(" + i + ")' >Create Rocket " + (i + 1) + "</button> ";
    }
}
function createRocket(position) {
    var i;
    var rocketCode = prompt("Introdueix el codi del coet");
    var rocketThruster = parseInt(prompt("Introdueix el nombre de propulsors"));
    var rocketCurrentPower = [];
    var rocketMaxPower = [];
    for (i = 0; i < rocketThruster; i++) {
        var rocketPower_generic = parseInt(prompt("Introdueix la potència màxima de cada propulsor"));
        rocketMaxPower.push(rocketPower_generic);
        rocketCurrentPower.push(0);
    }
    var newRocket = new Rocket(rocketCode, rocketThruster, rocketCurrentPower, rocketMaxPower);
    rocketArray[position] = newRocket;
    document.getElementById("accelerators").innerHTML +=
        "<button type='button' id='accelerator" + position + "' onclick='accelerateRocket(" + position + ")'>Accelerate Rocket " + (position + 1) + "</button> ";
    document.getElementById("brakes").innerHTML +=
        "<button type='button' id='brake" + position + "' onclick='brakeRocket(" + position + ")'>Brake Rocket " + (position + 1) + "</button> ";
    document.getElementById("printers").innerHTML +=
        "<button type='button' id='print" + position + "' onclick='printRocket(" + position + ")'>Print Rocket " + (position + 1) + " info</button> ";
    document.getElementById("printersAll").innerHTML =
        "<button type='button' id='printAll" + position + "' onclick='printAllRockets()'>Print all rockets</button> ";
    console.log(rocketArray);
}
function accelerateRocket(position) {
    rocketArray[position].accelerar();
    console.log(JSON.stringify(rocketArray[position]));
}
function brakeRocket(position) {
    rocketArray[position].frenar();
    console.log(JSON.stringify(rocketArray[position]));
}
function printRocket(position) {
    document.getElementById("printInfo").innerHTML +=
        "Rocket " + rocketArray[position].code + " has " + rocketArray[position].thrusters + " thrusters (" + rocketArray[position].currentPower + "). Max power: (" + rocketArray[position].maxPower + ")" + "<br>";
}
function printAllRockets() {
    var i;
    for (i = 0; i < rocketArray.length; i++) {
        document.getElementById("printInfo").innerHTML +=
            "Rocket " + rocketArray[i].code + " has " + rocketArray[i].thrusters + " thrusters (" + rocketArray[i].currentPower + "). Max power (" + rocketArray[i].maxPower + ")" + "<br>";
    }
}
