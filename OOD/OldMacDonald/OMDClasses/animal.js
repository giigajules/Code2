"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        name;
        food;
        sound;
        constructor(_name, _food, _sound) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
        }
        eat() {
            if (this.food.supply > 0) {
                this.food.supply--;
            }
            else {
                alert("There is no food for the " + this.name + "! :(");
            }
        }
        sing() {
            const song = "Old Mac Donald had a farm, " + this.sound + "!";
            return song;
        }
    }
    OldMacDonald.Animal = Animal;
})(OldMacDonald || (OldMacDonald = {}));
