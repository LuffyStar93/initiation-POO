import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserShow extends View<User, UserProps>{
    template(){
        return `
            <div>
                <h1>User Show</h1>
                <div>User name : ${this.model.get('name')}</div>
                <div>User age : ${this.model.get('age')}</div>
            </div>
        `
    }
}