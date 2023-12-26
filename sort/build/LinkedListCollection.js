"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const sorter_1 = require("./sorter");
class LNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends sorter_1.Asorter {
    constructor() {
        super(...arguments);
        this.head = null;
        this.currLength = 0;
        this.tail = null;
    }
    add(data) {
        const node = new LNode(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.currLength++;
        return;
    }
    get length() {
        return this.currLength;
    }
    at(index) {
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
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
        return;
    }
    print() {
        if (!this.head) {
            throw new Error('List is empty');
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
        return;
    }
}
exports.LinkedList = LinkedList;
