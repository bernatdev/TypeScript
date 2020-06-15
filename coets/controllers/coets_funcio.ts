var rocketArray: Rocket[] = [];

function create() {
    var i: number;
    var rocketAmount: number = parseInt((<HTMLInputElement>document.getElementById("rocket_amount")).value);

    for (i = 0; i < rocketAmount; i++) {
        (<HTMLInputElement>document.getElementById("creators")).innerHTML +=
            `<button type='button' class='btn btn-danger' id='creator${i}' onclick='createRocket(${i})' >Create Rocket ${i + 1}</button> `;
    }
}


function createRocket(position: number) {
    var i: number;
    var rocketCode: string = prompt("Introdueix el codi del coet")!;
    var rocketThruster: number = parseInt(prompt("Introdueix el nombre de propulsors")!);
    var rocketCurrentPower: number[] = [];
    var rocketMaxPower: number[] = [];

    for (i = 0; i < rocketThruster; i++) {
        var rocketPower_generic: number = parseInt(prompt("Introdueix la potència màxima de cada propulsor")!);
        rocketMaxPower.push(rocketPower_generic);
        rocketCurrentPower.push(0);
    }

    var newRocket = new Rocket(rocketCode, rocketThruster, rocketCurrentPower, rocketMaxPower);
    rocketArray[position] = newRocket;

    (<HTMLInputElement>document.getElementById("accelerators")).innerHTML +=
        `<button type='button' id='accelerator${position}' onclick='accelerateRocket(${position})'>Accelerate Rocket ${position + 1}</button> `;
    (<HTMLInputElement>document.getElementById("brakes")).innerHTML +=
        `<button type='button' id='brake${position}' onclick='brakeRocket(${position})'>Brake Rocket ${position + 1}</button> `;
    (<HTMLInputElement>document.getElementById("printers")).innerHTML +=
        `<button type='button' id='print${position}' onclick='printRocket(${position})'>Print Rocket ${position + 1} info</button> `;
    (<HTMLInputElement>document.getElementById("printersAll")).innerHTML =
        `<button type='button' id='printAll${position}' onclick='printAllRockets()'>Print all rockets</button> `;
    console.log(rocketArray);

}


function accelerateRocket(position: number) {
    rocketArray[position].accelerar();
    console.log(JSON.stringify(rocketArray[position]));
}


function brakeRocket(position: number) {
    rocketArray[position].frenar();
    console.log(JSON.stringify(rocketArray[position]));
}


function printRocket(position: number) {
    (<HTMLInputElement>document.getElementById("printInfo")).innerHTML +=
        "Rocket " + rocketArray[position].code + " has " + rocketArray[position].thrusters + " thrusters (" + rocketArray[position].currentPower + "). Max power: ("+ rocketArray[position].maxPower + ")"+"<br>";
}


function printAllRockets() {
    var i: number;
    for (i = 0; i < rocketArray.length; i++) {
        (<HTMLInputElement>document.getElementById("printInfo")).innerHTML +=
            "Rocket " + rocketArray[i].code + " has " + rocketArray[i].thrusters + " thrusters (" + rocketArray[i].currentPower + "). Max power ("+ rocketArray[i].maxPower + ")" + "<br>";
    }
}