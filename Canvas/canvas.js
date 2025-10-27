"use strict";
var Canvas;
(function (Canvas) {
    document.addEventListener("DOMContentLoaded", hndLoad);
    let canvas;
    let crc2;
    let radius;
    let numPieces;
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.height = 700;
        canvas.width = 1520;
        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        userInput();
        drawTriangleCircle(radius, numPieces);
    }
    function drawTriangle(_centerPoint, _firstVec, _secondVec) {
        const triangle = new Path2D();
        triangle.moveTo(_centerPoint.x, _centerPoint.y);
        triangle.lineTo(_firstVec.x, _firstVec.y);
        triangle.lineTo(_secondVec.x, _secondVec.y);
        triangle.closePath();
        crc2.fillStyle = "#e64e6cff";
        crc2.fill(triangle);
        crc2.strokeStyle = "#000000";
        crc2.stroke(triangle);
    }
    function userInput() {
        radius = parseInt(prompt("Enter the radius of the triangle-circle: ", "1") || "1", 10);
        numPieces = parseInt(prompt("Enter its number of pieces: ", "1") || "5", 10);
    }
    function drawTriangleCircle(_radius, _numPieces) {
        const centerPoint = { x: 700, y: 400 };
        for (let i = 0; i < _numPieces; i++) {
            const x1 = Math.sin(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.x;
            const y1 = Math.cos(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.y;
            const x2 = Math.sin(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.x;
            const y2 = Math.cos(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.y;
            const firstVec = { x: x1, y: y1 };
            const secondVec = { x: x2, y: y2 };
            drawTriangle(centerPoint, firstVec, secondVec);
        }
    }
})(Canvas || (Canvas = {}));
