import { Model } from "../models/Model";
import { User, UserProps } from "../models/User";
import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User,UserProps>{
    renderItem(model: Model<User>, itemElement: Element): void {
        new UserShow(itemElement,model).render();
    }
    
}