import { User } from "./models/User";
// import { UserEdit } from "./views/UserEdit";

import { Collection } from "./models/Collection";
import { UserProps } from "./models/User";
import { UserList } from "./views/UserList";

// const user = User.buildUser({ name: 'anme', age: 23 })
// const root = document.getElementById('root');

// if (root) {
//     const userForm = new UserEdit(root, user);
//     userForm.render();
//     console.log(userForm);
// } else {
//     throw new Error('root element not found')
// }


const users = new Collection('http://localhost:3001/users',(json:UserProps) => {
    return User.buildUser(json);
})

users.on('change',() => {
    const root = document.getElementById('root');
    
    if(root){
        new UserList(users,root).render();
    }
})

users.fetch();

