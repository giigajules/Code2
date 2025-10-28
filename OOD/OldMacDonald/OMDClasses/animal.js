"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        food;
        sound;
        constructor(_food, _sound) {
            this.food = _food;
            this.sound = _sound;
        }
        eat() {
            this.food.supply--;
        }
        sing() {
        }
    }
    OldMacDonald.Animal = Animal;
})(OldMacDonald || (OldMacDonald = {}));
