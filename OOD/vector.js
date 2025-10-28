export var OOD;
(function (OOD) {
    class Vector {
        x;
        y;
        constructor(_x = 0, _y = 0) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
})(OOD || (OOD = {}));
