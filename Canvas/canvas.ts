namespace Canvas {
    document.getElementById("pizza")!.onclick = hndPizza
    document.getElementById("randomTriangles")!.onclick = hndRandomTriangles
    document.getElementById("clearCanvas")!.onclick = hndClearCanvas

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let radius: number;
    let numPieces: number;

    type Vector2 = {
        x: number;
        y: number;
    }

    canvas = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;

    canvas.height = 700;
    canvas.width = 1520;

    crc2.fillStyle = "#65e49eff";
    crc2.fillRect(0, 0, canvas.width, canvas.height);


    function hndPizza(): void {
        circleInput();
        drawTriangleCircle(radius, numPieces);
    }

    function hndRandomTriangles(): void {
        drawRandomTriangles(randTriangleInput());
    }

    function hndClearCanvas(): void {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function getRandomNumber(_max: number): number {
        return Math.floor(Math.random() * _max);
    }

    function drawTriangle(_centerPoint: Vector2, _firstVec: Vector2, _secondVec: Vector2, _fillColor: string): void {
        const triangle: Path2D = new Path2D();
        triangle.moveTo(_centerPoint.x, _centerPoint.y);
        triangle.lineTo(_firstVec.x, _firstVec.y);
        triangle.lineTo(_secondVec.x, _secondVec.y);
        triangle.closePath();

        crc2.fillStyle = _fillColor;
        crc2.fill(triangle);
        crc2.strokeStyle = "#000000";
        crc2.stroke(triangle);
    }

    function circleInput(): void {
        radius = parseInt(prompt("What shall be the radius of the pizza?", "1") || "100", 10);
        numPieces = parseInt(prompt("Into how many pieces shall I split the pizza?:", "1") || "5", 10);
    }

    function randTriangleInput(): number {
        const randTriangleCount: number = parseInt(prompt("How many triangles do you want to create?", "1") || "1", 10)
        return randTriangleCount;
    }

    function drawTriangleCircle(_radius: number, _numPieces: number): void {
        const centerPoint: Vector2 = { x: 700, y: 400 };
        const fillColor: string = "#e4576eff"
        for (let i: number = 0; i < _numPieces; i++) {
            const x1: number = Math.sin(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.x;
            const y1: number = Math.cos(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.y;
            const x2: number = Math.sin(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.x;
            const y2: number = Math.cos(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.y;
            const firstVec: Vector2 = { x: x1, y: y1 };
            const secondVec: Vector2 = { x: x2, y: y2 };
            drawTriangle(centerPoint, firstVec, secondVec, fillColor);
        }
    }

    function drawRandomTriangles(_numTriangles: number): void {
        for (let i: number = 0; i < _numTriangles; i++) {
            const centerPoint: Vector2 = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const firstVec: Vector2 = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const secondVec: Vector2 = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const fillColor: string = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            drawTriangle(centerPoint, firstVec, secondVec, fillColor);
        }
    }
}