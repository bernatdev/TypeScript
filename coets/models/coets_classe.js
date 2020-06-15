"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters, currentPower, maxPower) {
        this.code = code;
        this.thrusters = thrusters;
        this.currentPower = currentPower;
        this.maxPower = maxPower;
    }
    Rocket.prototype.accelerar = function () {
        var i;
        for (i = 0; i < this.thrusters; i++) {
            if (this.maxPower[i] >= 10 + this.currentPower[i]) {
                this.currentPower[i] = this.currentPower[i] + 10;
            }
        }
    };
    Rocket.prototype.frenar = function () {
        var i;
        for (i = 0; i < this.thrusters; i++) {
            if (this.currentPower[i] >= 10) {
                this.currentPower[i] = this.currentPower[i] - 10;
            }
        }
    };
    return Rocket;
}());
