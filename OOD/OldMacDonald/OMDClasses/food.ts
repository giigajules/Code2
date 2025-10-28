namespace OldMacDonald {
    export class Food {
        public name: string;
        public supply: number;

        public constructor(_name: string, _supply: number = 0) {
            this.supply = _supply;
            this.name = _name;
        }

        public reorder(): void {
            this.supply++;
        }
    }
}