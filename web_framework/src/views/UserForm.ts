import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }

    onSaveClick = ():void => {
        this.model.save();
    }

    onButtonClick(): void {
        console.log('hi there');
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    }

    onSetAgeClick = (): void => {
        console.log('button clicked');
        this.model.setRandomAge();

    }

    template(): string {
        return `
        <div>
        <input placeholder="${this.model.get('name')}" ></input>
        <button class="set-name">change name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model" >save</button>
        </div>
        `
    }





}