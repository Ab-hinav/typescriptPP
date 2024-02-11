import { Collection } from "../models/Collection";
import { HasId, Model } from "../models/Model";

export abstract class CollectionView<T extends HasId, K> {

    constructor(public collection: Collection<T, K>, public parent: Element) { }

    render() {
        this.parent.innerHTML = '';

        const template = document.createElement('template');

        for(let model of this.collection.models){
            const itemElement = document.createElement('div');
            this.renderItem(model,itemElement);
            template.content.append(itemElement);
        }

        this.parent.append(template);
        
    }

    abstract renderItem(model: Model<T>, itemElement: Element): void;



}