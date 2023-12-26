import { Asorter } from "./sorter";

export class NumbersCollection extends Asorter {

    public constructor(public data:number[]){
        super();
    }

    get length():number{
        return this.data.length;
    }

    public compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number,rightIndex:number):void{

        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;

        return;

    }

}