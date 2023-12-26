import { Asorter } from "./sorter";

class LNode {
    next: null | LNode = null;

    constructor(public data: number) {
    }

}

export class LinkedList extends Asorter{
    head: LNode | null = null;
    currLength: number = 0;
    tail: LNode | null = null;

    add(data: number): void {

        const node = new LNode(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        this.currLength++;
        return;
    }

    get length(): number {
        return this.currLength;
    }

    at(index: number): LNode {

        if (index >= this.currLength) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter == index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex:number, rightIndex:number):boolean{
        
        if(!this.head){
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex:number, rightIndex:number):void{
        
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;

        return; 
    }

    print():void{
        
        if(!this.head){
            throw new Error('List is empty');
        }

        let node:LNode | null  = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
        return;
    }

}