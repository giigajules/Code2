"use strict";
var Canvas;
(function (Canvas) {
    document.addEventListener("DOMContentLoaded", hndLoad);
    document.getElementById("pizza").onclick = hndPizza;
    document.getElementById("randomTriangles").onclick = hndRandomTriangles;
    document.getElementById("clearCanvas").onclick = hndClearCanvas;
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
    }
    function hndPizza() {
        circleInput();
        drawTriangleCircle(radius, numPieces);
    }
    function hndRandomTriangles() {
        drawRandomTriangles(randTriangleInput());
    }
    function hndClearCanvas() {
        crc2.clearRect(0, 0, canvas.width, canvas.height);
        crc2.fillStyle = "#65e49eff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawTriangle(_centerPoint, _firstVec, _secondVec, _fillColor) {
        const triangle = new Path2D();
        triangle.moveTo(_centerPoint.x, _centerPoint.y);
        triangle.lineTo(_firstVec.x, _firstVec.y);
        triangle.lineTo(_secondVec.x, _secondVec.y);
        triangle.closePath();
        crc2.fillStyle = _fillColor;
        crc2.fill(triangle);
        crc2.strokeStyle = "#000000";
        crc2.stroke(triangle);
    }
    function circleInput() {
        radius = parseInt(prompt("Enter the radius of the triangle-circle:", "1") || "100", 10);
        numPieces = parseInt(prompt("Enter its number of pieces:", "1") || "5", 10);
    }
    function randTriangleInput() {
        const randTriangleCount = parseInt(prompt("How many triangles do you want to create?", "1") || "1", 10);
        return randTriangleCount;
    }
    function getRandomNumber(_max) {
        return Math.floor(Math.random() * _max);
    }
    function drawTriangleCircle(_radius, _numPieces) {
        const centerPoint = { x: 700, y: 400 };
        const fillColor = "#e4576eff";
        for (let i = 0; i < _numPieces; i++) {
            const x1 = Math.sin(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.x;
            const y1 = Math.cos(Math.PI * 2 / _numPieces * i) * _radius + centerPoint.y;
            const x2 = Math.sin(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.x;
            const y2 = Math.cos(Math.PI * 2 / _numPieces * (i + 1)) * _radius + centerPoint.y;
            const firstVec = { x: x1, y: y1 };
            const secondVec = { x: x2, y: y2 };
            drawTriangle(centerPoint, firstVec, secondVec, fillColor);
        }
    }
    function drawRandomTriangles(_numTriangles) {
        for (let i = 0; i < _numTriangles; i++) {
            const centerPoint = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const firstVec = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const secondVec = { x: getRandomNumber(canvas.width), y: getRandomNumber(canvas.height) };
            const fillColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            drawTriangle(centerPoint, firstVec, secondVec, fillColor);
        }
    }
})(Canvas || (Canvas = {}));
