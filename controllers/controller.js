"use strict";
var car;
document.getElementById("myFormCar").addEventListener("blur", function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    ValidateCar();
}, true);
document.getElementById("myFormWheels").addEventListener("blur", function (event) {
    console.log(event);
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
    ValidateWheel();
}, true);
function createCar() {
    var plate = document.getElementById("inputPlate").value;
    var brand = document.getElementById("inputBrand").value;
    var color = document.getElementById("inputColor").value;
    car = new Car(plate, color, brand);
    document.getElementById("outputCar").innerHTML = "CAR: ";
    document.getElementById("outputPlate").innerHTML = "PLATE: " + car.plate;
    document.getElementById("outputBrand").innerHTML = "BRAND: " + car.brand;
    document.getElementById("outputColor").innerHTML = "COLOR: " + car.color;
}
function addWheels() {
    var inputWheelBrand1 = document.getElementById("inputWheelBrand1").value;
    var inputWheelBrand2 = document.getElementById("inputWheelBrand2").value;
    var inputWheelBrand3 = document.getElementById("inputWheelBrand3").value;
    var inputWheelBrand4 = document.getElementById("inputWheelBrand4").value;
    var inputWheelDiam1 = parseFloat(document.getElementById("inputWheelDiam1").value);
    var inputWheelDiam2 = parseFloat(document.getElementById("inputWheelDiam2").value);
    var inputWheelDiam3 = parseFloat(document.getElementById("inputWheelDiam3").value);
    var inputWheelDiam4 = parseFloat(document.getElementById("inputWheelDiam4").value);
    car.addWheel(new Wheel(inputWheelDiam1, inputWheelBrand1));
    car.addWheel(new Wheel(inputWheelDiam2, inputWheelBrand2));
    car.addWheel(new Wheel(inputWheelDiam3, inputWheelBrand3));
    car.addWheel(new Wheel(inputWheelDiam4, inputWheelBrand4));
    document.getElementById("outputWheels").innerHTML = "WHEELS: ";
    document.getElementById("outputWheelBrand1").innerHTML = "Wheel1: Brand " + car.wheels[0].brand + ", Diam " + car.wheels[0].diameter;
    document.getElementById("outputWheelBrand2").innerHTML = "Wheel2: Brand " + car.wheels[1].brand + ", Diam " + car.wheels[1].diameter;
    document.getElementById("outputWheelBrand3").innerHTML = "Wheel3: Brand " + car.wheels[2].brand + ", Diam " + car.wheels[2].diameter;
    document.getElementById("outputWheelBrand4").innerHTML = "Wheel4: Brand " + car.wheels[3].brand + ", Diam " + car.wheels[3].diameter;
}
function ValidateCar() {
    var plate = document.getElementById("inputPlate").value;
    var acumErrors = 0;
    document.getElementById("myFormCar").classList.remove('is-invalid');
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
    if (acumErrors > 0) {
        return false;
    }
    else {
        return true;
    }
}
function ValidateWheel() {
    var inputWheelDiam1 = parseFloat(document.getElementById("inputWheelDiam1").value);
    var inputWheelDiam2 = parseFloat(document.getElementById("inputWheelDiam2").value);
    var inputWheelDiam3 = parseFloat(document.getElementById("inputWheelDiam3").value);
    var inputWheelDiam4 = parseFloat(document.getElementById("inputWheelDiam4").value);
    var acumErrors = 0;
    document.getElementById("myFormWheels").classList.remove('is-invalid');
    if (isNaN(inputWheelDiam1)) {
        document.getElementById("inputWheelDiam1").classList.add("is-invalid");
        document.getElementById("error_wheel1").textContent = "El diàmetre és obligatori";
        acumErrors++;
    }
    else if (inputWheelDiam1 < 0.4 || inputWheelDiam1 > 2) {
        document.getElementById("inputWheelDiam1").classList.add("is-invalid");
        document.getElementById("error_wheel1").textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam2)) {
        document.getElementById("inputWheelDiam2").classList.add("is-invalid");
        document.getElementById("error_wheel2").textContent = "El diàmetre és obligatori";
        acumErrors++;
    }
    else if (inputWheelDiam2 < 0.4 || inputWheelDiam2 > 2) {
        document.getElementById("inputWheelDiam2").classList.add("is-invalid");
        document.getElementById("error_wheel2").textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam3)) {
        document.getElementById("inputWheelDiam3").classList.add("is-invalid");
        document.getElementById("error_wheel3").textContent = "El diàmetre és obligatori";
        acumErrors++;
    }
    else if (inputWheelDiam3 < 0.4 || inputWheelDiam3 > 2) {
        document.getElementById("inputWheelDiam3").classList.add("is-invalid");
        document.getElementById("error_wheel3").textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam4)) {
        document.getElementById("inputWheelDiam4").classList.add("is-invalid");
        document.getElementById("error_wheel4").textContent = "El diàmetre és obligatori";
        acumErrors++;
    }
    else if (inputWheelDiam4 < 0.4 || inputWheelDiam4 > 2) {
        document.getElementById("inputWheelDiam4").classList.add("is-invalid");
        document.getElementById("error_wheel4").textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
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
