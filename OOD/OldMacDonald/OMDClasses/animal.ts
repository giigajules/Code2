namespace OldMacDonald {
    export class Animal {
        public food: Food;
        public sound: string;

        public constructor(_food: Food, _sound: string) {
            this.food = _food;
            this.sound = _sound;
        }
        
        public eat(): void {
            this.food.supply--;
        }

        public sing(): void {
            
        }
    }
}
