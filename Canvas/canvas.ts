namespace Canvas {
    document.addEventListener("DOMContentLoaded", hndLoad)

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let radius: number;
    let numPieces: number;

    type Vector2 = {
        x: number;
        y: number;
    }

    function hndLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        canvas.height = 700;
        canvas.width = 1520;

        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        userInput();
        drawTriangleCircle(radius, numPieces);
    }

    function drawTriangle(_centerPoint: Vector2, _firstVec: Vector2, _secondVec: Vector2): void {
        const triangle: Path2D = new Path2D();
        triangle.moveTo(_centerPoint.x, _centerPoint.y);
        triangle.lineTo(_firstVec.x, _firstVec.y);
        triangle.lineTo(_secondVec.x, _secondVec.y);
        triangle.closePath();

        crc2.fillStyle = "#e64e6cff";
        crc2.fill(triangle);
        crc2.strokeStyle = "#000000";
        crc2.stroke(triangle);
    }

    function userInput(): void {
        radius = parseInt(prompt("Enter the radius of the triangle-circle: ", "1") || "1", 10);
        numPieces = parseInt(prompt("Enter its number of pieces: ", "1") || "5", 10);
    }

    function drawTriangleCircle(_radius: number, _numPieces: number): void {
        const centerPoint: Vector2 = {x: 700, y: 400};
        for (let i: number = 0; i < _numPieces; i++) {
            const x1: number = Math.sin(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.x;
            const y1: number = Math.cos(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.y;
            const x2: number = Math.sin(Math.PI * 2 / _numPieces * (i+1)) * _radius + centerPoint.x;
            const y2: number = Math.cos(Math.PI * 2 / _numPieces * (i+1)) * _radius + centerPoint.y;
            const firstVec: Vector2 = {x: x1, y: y1};
            const secondVec: Vector2 = {x: x2, y: y2};
            drawTriangle(centerPoint, firstVec, secondVec);
        }
    }
}