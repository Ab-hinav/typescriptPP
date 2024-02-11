import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {

    regions: { [key: string]: Element } = {};

    eventsMap(): { [key: string]: () => void } {
        return {}
    };
    regionsMap(): { [key: string]: string } {
        return {}
    }


    abstract template(): string;


    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragement: DocumentFragment): void {

        const eventMap = this.eventsMap();
        for (let eventKey in eventMap) {
            const [eventName, selector] = eventKey.split(':');
            fragement.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventMap[eventKey]);
            })
        }

    }

    mapRegions(fragement: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragement.querySelector(selector);

            if (element) {
                this.regions[key] = element;
            }
        }


    }

    onRender(): void {

    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();


        this.parent.appendChild(templateElement.content);
    }




}