class Rocket {
    code: string;
    thrusters: number;
    currentPower: number[];
    maxPower: number[];

    constructor(code: string, thrusters: number, currentPower: number[], maxPower: number[]) {
        this.code = code;
        this.thrusters = thrusters;
        this.currentPower = currentPower;
        this.maxPower = maxPower;
    }

    accelerar(): void {
        var i: number;
        for (i = 0; i < this.thrusters; i++) {
            if (this.maxPower[i] >= 10 + this.currentPower[i]) {
                this.currentPower[i] = this.currentPower[i] + 10;
            }
        }
    }

    frenar(): void {
        var i: number;
        for (i = 0; i < this.thrusters; i++) {
            if (this.currentPower[i] >= 10) {
                this.currentPower[i] = this.currentPower[i] - 10;
            }
        }
    }

    
}

