"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Food {
        supply;
        constructor(_supply = 0) {
            this.supply = _supply;
        }
        reorder() {
            this.supply++;
        }
    }
    OldMacDonald.Food = Food;
})(OldMacDonald || (OldMacDonald = {}));
