export namespace OOD {
    class Vector {
        public x: number;
        public y: number;

        public constructor(_x: number = 0, _y: number = 0) {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
}