import { View } from "../framework/views/View";
import { User, UserProps } from "./User";

export class UserList extends View<User, UserProps>{


       
    usersList = User.buildCollection();
    constructor(
        parent:Element,
        user: User,
    ){
        super(parent, user)
        this.usersList.fetch()
        this.usersList.on('change', () =>{
            this.render()
        })

    }

    renderOptions(): string {
        return this.usersList.models.map((user:User) => {
            const id = user.get('id',);
            const name = user.get('name');
            return `<option value="${user.get('id')}">${user.get('name')}</option>`
        }).join('')
    }

    onSelectChange = () => {
        const selectElement = document.getElementById("select-user") as HTMLSelectElement;
        if (selectElement) {
            const userId = selectElement.value;
            console.log(userId)
        }
    }

    eventsMap() : {[key:string]: () => void}{
        return {
            'change:.select-user': this.onSelectChange,
        }
    }

    template(){
        return `
            <div>
                <h1>User List</h1>
                <label  for="select-user">Choose a user:</label>
                <select name="users" class="select-user" id="select-user">
                    ${this.renderOptions()}
                </select>
            </div>
        `
    }

}