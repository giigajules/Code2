"use strict";
var Asteroids;
(function (Asteroids) {
    window.addEventListener("load", hndLoad);
    function hndLoad() {
        console.log("Asteroids starting...");
        const canvas = document.querySelector("canvas");
        if (!canvas) {
            return;
        }
        Asteroids.crc2 = canvas.getContext("2d");
        Asteroids.crc2.fillStyle = "black";
        Asteroids.crc2.strokeStyle = "white";
        Asteroids.crc2.fillRect(0, 0, Asteroids.crc2.canvas.width, Asteroids.crc2.canvas.height);
        Asteroids.createPaths();
        console.log("Asteroids' paths: " + Asteroids.asteroidPaths);
        const asteroid = new Asteroids.Asteroid(1);
        console.log(asteroid);
        for (let i = 0; i < 100; i++) {
            asteroid.draw();
            asteroid.move(0.1);
        }
    }
})(Asteroids || (Asteroids = {}));
