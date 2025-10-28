"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    document.addEventListener("DOMContentLoaded", hndLoad);
    let animals;
    let supplies;
    let songs;
    let resupplies;
    let startButton;
    let meat;
    let grains;
    let grass;
    let dog;
    let cat;
    let horse;
    let chicken;
    let cow;
    let animalList = [];
    //let supplyList: Food[] = [];
    function hndLoad() {
        animals = document.getElementsByClassName("animals");
        supplies = document.getElementsByClassName("supplies");
        songs = document.getElementsByClassName("songs");
        startButton = document.getElementById("start");
        resupplies = document.getElementsByClassName("resupply");
        console.log(resupplies);
        startButton.addEventListener("click", hndPlay);
        for (let i = 0; i < 3; i++) {
            resupplies[i].addEventListener("click", hndResupply);
        }
        meat = new OldMacDonald.Food("Meat", 3);
        grains = new OldMacDonald.Food("Grains", 10);
        grass = new OldMacDonald.Food("Grass", 26);
        //supplyList = [meat, grains, grass];
        dog = new OldMacDonald.Animal("Dog", meat, "Woof");
        cat = new OldMacDonald.Animal("Cat", meat, "Meow");
        horse = new OldMacDonald.Animal("Horse", grains, "Wee");
        chicken = new OldMacDonald.Animal("Chicken", grains, "Kik");
        cow = new OldMacDonald.Animal("Cow", grass, "Moo");
        animalList = [dog, cat, horse, chicken, cow];
        initialize();
    }
    function initialize() {
        for (let i = 0; i < 5; i++) {
            animals[i].innerHTML = animalList[i].name;
            supplies[i].innerHTML = animalList[i].food.name + ": " + animalList[i].food.supply;
        }
    }
    function hndPlay() {
        for (let i = 0; i < 5; i++) {
            animalList[i].eat();
            songs[i].innerHTML = animalList[i].sing();
            updateSupplies();
        }
    }
    function updateSupplies() {
        for (let i = 0; i < 5; i++) {
            supplies[i].innerHTML = animalList[i].food.name + ": " + animalList[i].food.supply;
        }
    }
    function hndResupply() {
        alert("This feature isn't ready yet. Your animals will, unfortunately, starve.");
    }
})(OldMacDonald || (OldMacDonald = {}));
