namespace OldMacDonald {
    export class Food {
        public supply: number;

        public constructor(_supply: number = 0) {
            this.supply = _supply;
        }

        public reorder(): void {
            this.supply++;
        }
    }
}