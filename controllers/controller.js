"use strict";
var car;
function createCar() {
    var plate = document.getElementById("inputPlate").value;
    var color = document.getElementById("inputColor").value;
    var brand = document.getElementById("inputBrand").value;
    if (ValidateCar() == true) {
        car = new Car(plate, color, brand);
        document.getElementById("outputCar").innerHTML = "COTXE: ";
        document.getElementById("outputPlate").innerHTML = "Matrícula: " + car.plate;
        document.getElementById("outputColor").innerHTML = "Color: " + car.color;
        document.getElementById("outputBrand").innerHTML = "Marca: " + car.brand;
        document.getElementById("myFormWheels").classList.remove('d-none');
        document.getElementById("outputWheelsDiv").classList.add('d-none');
        document.getElementById("outputCarDiv").classList.remove('d-none');
    }
    else {
        document.getElementById("myFormWheels").classList.add('d-none');
        document.getElementById("outputWheelsDiv").classList.add('d-none');
        document.getElementById("outputCarDiv").classList.add('d-none');
    }
}
function ValidateCar() {
    var plate = document.getElementById("inputPlate").value;
    var brand = document.getElementById("inputBrand").value;
    var color = document.getElementById("inputColor").value;
    var acumErrors = 0;
    document.getElementById("inputPlate").classList.remove("is-invalid");
    document.getElementById("inputBrand").classList.remove("is-invalid");
    document.getElementById("inputColor").classList.remove("is-invalid");
    if (plate == '') {
        document.getElementById("inputPlate").classList.add("is-invalid");
        document.getElementById("error_plate").textContent = "La matrícula és obligatòria";
        acumErrors++;
    }
    else if (!validate_plate(plate)) {
        document.getElementById("inputPlate").classList.add("is-invalid");
        document.getElementById("error_plate").textContent = "La matrícula ha de tenir 4 números i 3 lletres";
        acumErrors++;
    }
    if (brand == '') {
        document.getElementById("inputBrand").classList.add("is-invalid");
        document.getElementById("error_brand").textContent = "La marca és obligatòria";
        acumErrors++;
    }
    if (color == '') {
        document.getElementById("inputColor").classList.add("is-invalid");
        document.getElementById("error_color").textContent = "El color és obligatori";
        acumErrors++;
    }
    if (acumErrors > 0) {
        return false;
    }
    else {
        return true;
    }
}
function validate_plate(plate) {
    var regex = /^([0-9]{4})([a-zA-Z]{3})$/; // 4 números i 3 lletres
    return regex.test(plate) ? true : false;
}
function addWheels() {
    var i;
    for (i = 1; i < 5; i++) {
        var inputWheelBrand_generic = document.getElementById("inputWheelBrand" + i).value;
        var inputWheelDiam_generic = parseFloat(document.getElementById("inputWheelDiam" + i).value);
        if (ValidateWheel() == true) {
            car.addWheel(new Wheel(inputWheelDiam_generic, inputWheelBrand_generic));
            document.getElementById("outputWheelsDiv").classList.remove('d-none');
            document.getElementById("outputWheels").innerHTML = "RODES: ";
            document.getElementById("outputWheelBrand" + i).innerHTML = "Roda" + i + ": Marca " + car.wheels[i - 1].brand + ", Diam " + car.wheels[i - 1].diameter;
        }
    }
}
function ValidateWheel() {
    var i;
    var acumErrors = 0;
    for (i = 1; i < 5; i++) {
        var inputWheelDiam_generic = parseFloat(document.getElementById("inputWheelDiam" + i).value);
        document.getElementById("inputWheelDiam" + i).classList.remove("is-invalid");
        if (isNaN(inputWheelDiam_generic)) {
            document.getElementById("inputWheelDiam" + i).classList.add("is-invalid");
            document.getElementById("error_wheel" + i).textContent = "El diàmetre és obligatori";
            acumErrors++;
        }
        else if (inputWheelDiam_generic < 0.4 || inputWheelDiam_generic > 2) {
            document.getElementById("inputWheelDiam" + i).classList.add("is-invalid");
            document.getElementById("error_wheel" + i).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
            acumErrors++;
        }
    }
    if (acumErrors > 0) {
        return false;
    }
    else {
        return true;
    }
}
