var car: Car;

function createCar(plate: string, brand: string, color: string) {
    var plate = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    var brand = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    var color = (<HTMLInputElement>document.getElementById("inputColor")).value;

    car = new Car(plate, color, brand);

    (<HTMLInputElement>document.getElementById("outputCar")).innerHTML = "CAR: ";
    (<HTMLInputElement>document.getElementById("outputPlate")).innerHTML = "PLATE: " + car.plate;
    (<HTMLInputElement>document.getElementById("outputBrand")).innerHTML = "BRAND: " + car.brand;
    (<HTMLInputElement>document.getElementById("outputColor")).innerHTML = "COLOR: " + car.color;

   /* (<HTMLInputElement>document.getElementById("carInfo")).innerHTML = "CAR: PLATE: " + car.plate
        + " COLOR: " + car.color + " BRAND: " + brand 
        + " WHEELS: " + JSON.stringify(car.wheels);*/
}

function addWheels() {
    var inputWheelBrand1 = (<HTMLInputElement>document.getElementById("inputWheelBrand1")).value;
    var inputWheelBrand2 = (<HTMLInputElement>document.getElementById("inputWheelBrand2")).value;
    var inputWheelBrand3 = (<HTMLInputElement>document.getElementById("inputWheelBrand3")).value;
    var inputWheelBrand4 = (<HTMLInputElement>document.getElementById("inputWheelBrand4")).value;
    var inputWheelDiam1 = parseInt((<HTMLInputElement>document.getElementById("inputWheelDiam1")).value);
    var inputWheelDiam2 = parseInt((<HTMLInputElement>document.getElementById("inputWheelDiam2")).value);
    var inputWheelDiam3 = parseInt((<HTMLInputElement>document.getElementById("inputWheelDiam3")).value);
    var inputWheelDiam4 = parseInt((<HTMLInputElement>document.getElementById("inputWheelDiam4")).value);

    car.addWheel(new Wheel(inputWheelDiam1, inputWheelBrand1));
    car.addWheel(new Wheel(inputWheelDiam2, inputWheelBrand2));
    car.addWheel(new Wheel(inputWheelDiam3, inputWheelBrand3));
    car.addWheel(new Wheel(inputWheelDiam4, inputWheelBrand4));

    (<HTMLInputElement>document.getElementById("outputWheels")).innerHTML = "WHEELS: ";
    (<HTMLInputElement>document.getElementById("outputWheelBrand1")).innerHTML = "Wheel1: Brand " + car.wheels[0].brand + ", Diam "+ car.wheels[0].diameter;
    (<HTMLInputElement>document.getElementById("outputWheelBrand2")).innerHTML = "Wheel2: Brand " + car.wheels[1].brand + ", Diam "+ car.wheels[1].diameter;
    (<HTMLInputElement>document.getElementById("outputWheelBrand3")).innerHTML = "Wheel3: Brand " + car.wheels[2].brand + ", Diam "+ car.wheels[2].diameter;
    (<HTMLInputElement>document.getElementById("outputWheelBrand4")).innerHTML = "Wheel4: Brand " + car.wheels[3].brand + ", Diam "+ car.wheels[3].diameter;

}