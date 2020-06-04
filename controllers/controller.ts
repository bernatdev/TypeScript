var car: Car;

function createCar() {
    var plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    var color = (<HTMLInputElement>document.getElementById("inputColor")).value;
    var brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;

    if (ValidateCar() == true) {
        car = new Car(plate, color, brand);

        (<HTMLInputElement>document.getElementById("outputCar")).innerHTML = "COTXE: ";
        (<HTMLInputElement>document.getElementById("outputPlate")).innerHTML = "Matrícula: " + car.plate;
        (<HTMLInputElement>document.getElementById("outputColor")).innerHTML = "Color: " + car.color;
        (<HTMLInputElement>document.getElementById("outputBrand")).innerHTML = "Marca: " + car.brand;

        (<HTMLInputElement>document.getElementById("myFormWheels")).classList.remove('d-none');

    }

}

function ValidateCar() {
    var plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    var acumErrors = 0;
    (<HTMLInputElement>document.getElementById("myFormCar")).classList.remove('is-invalid');

    if (plate == '') {
        (<HTMLInputElement>document.getElementById("inputPlate")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_plate")).textContent = "La matrícula és obligatòria";
        acumErrors++;
    } else if (!validate_plate(plate)) {
        (<HTMLInputElement>document.getElementById("inputPlate")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_plate")).textContent = "La matrícula ha de tenir 4 números i 3 lletres";
        acumErrors++;
    }

    if (acumErrors > 0) {
        return false;
    } else {
        return true;
    }
}

function validate_plate(plate: string) {
    var regex = /^([0-9]{4})([a-zA-Z]{3})$/;  // 4 números i 3 lletres
    return regex.test(plate) ? true : false;
}

function addWheels() {
    var inputWheelBrand1 = (<HTMLInputElement>document.getElementById("inputWheelBrand1")).value;
    var inputWheelBrand2 = (<HTMLInputElement>document.getElementById("inputWheelBrand2")).value;
    var inputWheelBrand3 = (<HTMLInputElement>document.getElementById("inputWheelBrand3")).value;
    var inputWheelBrand4 = (<HTMLInputElement>document.getElementById("inputWheelBrand4")).value;
    var inputWheelDiam1 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam1")).value);
    var inputWheelDiam2 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam2")).value);
    var inputWheelDiam3 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam3")).value);
    var inputWheelDiam4 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam4")).value);

    if (ValidateWheel() == true) {

        car.addWheel(new Wheel(inputWheelDiam1, inputWheelBrand1));
        car.addWheel(new Wheel(inputWheelDiam2, inputWheelBrand2));
        car.addWheel(new Wheel(inputWheelDiam3, inputWheelBrand3));
        car.addWheel(new Wheel(inputWheelDiam4, inputWheelBrand4));

        (<HTMLInputElement>document.getElementById("outputWheels")).innerHTML = "RODES: ";
        (<HTMLInputElement>document.getElementById("outputWheelBrand1")).innerHTML = "Roda1: Marca " + car.wheels[0].brand + ", Diam " + car.wheels[0].diameter;
        (<HTMLInputElement>document.getElementById("outputWheelBrand2")).innerHTML = "Roda2: Marca " + car.wheels[1].brand + ", Diam " + car.wheels[1].diameter;
        (<HTMLInputElement>document.getElementById("outputWheelBrand3")).innerHTML = "Roda3: Marca " + car.wheels[2].brand + ", Diam " + car.wheels[2].diameter;
        (<HTMLInputElement>document.getElementById("outputWheelBrand4")).innerHTML = "Roda4: Marca " + car.wheels[3].brand + ", Diam " + car.wheels[3].diameter;
    }
}

function ValidateWheel() {
    var inputWheelDiam1 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam1")).value);
    var inputWheelDiam2 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam2")).value);
    var inputWheelDiam3 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam3")).value);
    var inputWheelDiam4 = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam4")).value);
    var acumErrors = 0;
    (<HTMLInputElement>document.getElementById("inputWheelDiam1")).classList.remove("is-invalid");
    (<HTMLInputElement>document.getElementById("inputWheelDiam2")).classList.remove("is-invalid");
    (<HTMLInputElement>document.getElementById("inputWheelDiam3")).classList.remove("is-invalid");
    (<HTMLInputElement>document.getElementById("inputWheelDiam4")).classList.remove("is-invalid");

    if (isNaN(inputWheelDiam1)) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam1")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel1")).textContent = "El diàmetre és obligatori";
        acumErrors++;
    } else if (inputWheelDiam1 < 0.4 || inputWheelDiam1 > 2) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam1")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel1")).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam2)) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam2")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel2")).textContent = "El diàmetre és obligatori";
        acumErrors++;
    } else if (inputWheelDiam2 < 0.4 || inputWheelDiam2 > 2) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam2")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel2")).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam3)) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam3")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel3")).textContent = "El diàmetre és obligatori";
        acumErrors++;
    } else if (inputWheelDiam3 < 0.4 || inputWheelDiam3 > 2) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam3")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel3")).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }
    if (isNaN(inputWheelDiam4)) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam4")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel4")).textContent = "El diàmetre és obligatori";
        acumErrors++;
    } else if (inputWheelDiam4 < 0.4 || inputWheelDiam4 > 2) {
        (<HTMLInputElement>document.getElementById("inputWheelDiam4")).classList.add("is-invalid");
        (<HTMLInputElement>document.getElementById("error_wheel4")).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
        acumErrors++;
    }

    if (acumErrors > 0) {
        return false;
    } else {
        return true;
    }
}


