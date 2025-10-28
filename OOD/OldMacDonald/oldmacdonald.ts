namespace OldMacDonald {
    document.addEventListener("DOMContentLoaded", hndLoad);

    let animals: HTMLCollectionOf<HTMLElement>;
    let supplies: HTMLCollectionOf<HTMLElement>;
    let songs: HTMLCollectionOf<HTMLElement>;
    let resupplies: HTMLCollectionOf<HTMLElement>;
    let startButton: HTMLElement;
    let meat: Food;
    let grains: Food;
    let grass: Food;
    let dog: Animal;
    let cat: Animal;
    let horse: Animal;
    let chicken: Animal;
    let cow: Animal;
    let animalList: Animal[] = [];
    let supplyList: Food[] = [];

    function hndLoad(): void {
        animals = document.getElementsByClassName("animals") as HTMLCollectionOf<HTMLElement>;
        supplies = document.getElementsByClassName("supplies") as HTMLCollectionOf<HTMLElement>;
        songs = document.getElementsByClassName("songs") as HTMLCollectionOf<HTMLElement>;
        startButton = document.getElementById("start")!;
        resupplies = document.getElementsByClassName("resupply") as HTMLCollectionOf<HTMLElement>;
        console.log(resupplies);

        startButton.addEventListener("click", hndPlay);

        for(let i: number = 0; i < 3; i++) {
            resupplies[i].addEventListener("click", hndResupply);
        }

        meat = new Food("Meat", 3);
        grains = new Food("Grains", 10);
        grass = new Food("Grass", 26);
        supplyList = [meat, grains, grass];

        dog = new Animal("Dog", meat, "Woof");
        cat = new Animal("Cat", meat, "Meow");
        horse = new Animal("Horse", grains, "Wee");
        chicken = new Animal("Chicken", grains, "Kik");
        cow = new Animal("Cow", grass, "Moo");
        animalList = [dog, cat, horse, chicken, cow];

        initialize();
    }

    function initialize(): void {
        for (let i: number = 0; i < 5; i++) {
            animals[i].innerHTML = animalList[i].name;
            supplies[i].innerHTML = animalList[i].food.name + ": " + animalList[i].food.supply;
        }
    }

    function hndPlay(): void {
        for(let i: number = 0; i < 5; i++) {
            animalList[i].eat();
            songs[i].innerHTML = animalList[i].sing();
        updateSupplies();
        }
    }

    function updateSupplies(): void {
        for (let i: number = 0; i < 5; i++) {
            supplies[i].innerHTML = animalList[i].food.name + ": " + animalList[i].food.supply;
        }
    }

    function hndResupply(): void {
        alert("This feature isn't ready yet. Your animals will, unfortunately, starve.");
    }
}