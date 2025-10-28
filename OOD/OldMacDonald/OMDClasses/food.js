"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Food {
        name;
        supply;
        constructor(_name, _supply = 0) {
            this.supply = _supply;
            this.name = _name;
        }
        reorder() {
            this.supply++;
        }
    }
    OldMacDonald.Food = Food;
})(OldMacDonald || (OldMacDonald = {}));
