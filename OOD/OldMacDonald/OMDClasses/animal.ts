namespace OldMacDonald {
    export class Animal {
        public name: string;
        public food: Food;
        public sound: string;

        public constructor(_name: string, _food: Food, _sound: string) {
            this.name = _name;
            this.food = _food;
            this.sound = _sound;
        }
        
        public eat(): void {
            if(this.food.supply > 0){
                this.food.supply--;
            }
            else{
                alert("There is no food for the " + this.name + "! :(");
            }
        }

        public sing(): string {
            const song: string = "Old Mac Donald had a farm, " + this.sound + "!";
            return song;
        }
    }
}
