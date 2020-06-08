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
    var i;
    for (i = 1; i < 5; i++) {
        var inputWheelBrand_generic = (<HTMLInputElement>document.getElementById("inputWheelBrand" + i)).value;
        var inputWheelDiam_generic = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam" + i)).value);

        if (ValidateWheel() == true) {
            car.addWheel(new Wheel(inputWheelDiam_generic, inputWheelBrand_generic));
            (<HTMLInputElement>document.getElementById("outputWheels")).innerHTML = "RODES: ";
            (<HTMLInputElement>document.getElementById("outputWheelBrand" + i)).innerHTML = "Roda" + i +": Marca " + car.wheels[i-1].brand + ", Diam " + car.wheels[i-1].diameter; 
        }
    }
}

function ValidateWheel() {
    var i;
    var acumErrors = 0;

    for (i = 1; i < 5; i++) {
        var inputWheelDiam_generic = parseFloat((<HTMLInputElement>document.getElementById("inputWheelDiam" + i)).value);
        (<HTMLInputElement>document.getElementById("inputWheelDiam" + i)).classList.remove("is-invalid");

        if (isNaN(inputWheelDiam_generic)) {
            (<HTMLInputElement>document.getElementById("inputWheelDiam" + i)).classList.add("is-invalid");
            (<HTMLInputElement>document.getElementById("error_wheel" + i)).textContent = "El diàmetre és obligatori";
            acumErrors++;
        } else if (inputWheelDiam_generic < 0.4 || inputWheelDiam_generic > 2) {
            (<HTMLInputElement>document.getElementById("inputWheelDiam" + i)).classList.add("is-invalid");
            (<HTMLInputElement>document.getElementById("error_wheel" + i)).textContent = "El diàmetre ha d'estar comprès entre 0.4 i 2";
            acumErrors++;
        }
    }

    if (acumErrors > 0) {
        return false;
    } else {
        return true;
    }
}


