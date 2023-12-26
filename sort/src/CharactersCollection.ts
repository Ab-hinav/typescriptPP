import { Asorter } from "./sorter";

export class CharactersCollection extends Asorter {

    constructor(public data: string) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        
        const left = this.data[leftIndex].toLowerCase();
        const right = this.data[rightIndex].toLowerCase();

        return left > right;
        
    }

    swap(leftIndex: number, rightIndex: number): void {
        
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('');
    
    }

}