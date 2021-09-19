import { nextState, prevState } from "../helpers/helpers"
import { Actions, User } from "../interfaces/interfaces"

export const usersReducer = (state: User[], action:Actions):User[] => {

    switch (action.type){

        case "addUser":            
            return [...state, action.payload];

        case "editUser":
            const {id, name, description, position, linkedin} = action.payload
            const newUsers = state.map( user => user.id === id ? {...user, name, description, position, linkedin} : user)
            return newUsers;

        case "removeUser":
            return state.filter( user => user.id !== action.payload );

        case "nextStateUser":
            return state.map( user => user.id === action.payload ? {...user, state: nextState(user.state)} : user)

        case "prevStateUser":
            return state.map( user => user.id === action.payload ? {...user, state: prevState(user.state)} : user)

        case "setUsers":
            return action.payload
            
        default:
            return state;
    }
}