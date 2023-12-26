import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
linkedList.sort();
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// const sorter3 = new Sorter(linkedList);
// // sorter.sort();
// sorter2.sort();
// sorter3.sort();

console.log(numbersCollection.data,charactersCollection.data);
linkedList.print();
[1.2,4,2].sort();