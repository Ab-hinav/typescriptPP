import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from './Eventings';
import { Model } from "./Model";


export interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3001/users';


export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }

}