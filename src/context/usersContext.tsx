import { createContext, useEffect, useState } from "react";
import { nextState, prevState } from "../helpers/helpers";
import { User } from "../interfaces/interfaces";

interface props {
    children: JSX.Element | JSX.Element[]
} 

type context = {
    users: User[];
    nextUserState: (id: number) => void;
    prevUserState: (id: number) => void;
    addUser: (name: string, description: string, position: string) => void;
    userEditState: User | undefined;
    setUserEditState: any;
    editUser: (name: string, description: string, position: string, id: number) => void;
    removeUser: (id: number) => void;
}

const initState = [
    {
        id: 1,
        name: "Ezequiel Gonzalez",
        description: "Tiene buena pinta.",
        position: "FRONTEND",
        state: "interviewsInitial"
    }
]

export const usersContext = createContext({} as context);

export const UsersProvider = ({children}:props) => {

    const [users, setUsers] = useState<User[]>(initState)
    const [userEditState, setUserEditState] = useState<User | undefined>(undefined)

    useEffect(() => {
        const data = window.localStorage.getItem("challenge-softvision-users-121214");
        const users = data ? JSON.parse(data).users : initState;
        setUsers(users)
    }, [setUsers])

    useEffect(() => {
        localStorage.setItem("challenge-softvision-users-121214", JSON.stringify({users}))
    }, [users])

    const addUser = (name: string, description: string, position: string) => {
        const newUser = {
            id: new Date().valueOf(),
            name,
            description,
            position,
            state: "interviewsInitial"
        }
        setUsers([...users, newUser])
    }

    const editUser = (name: string, description: string, position: string, id: number) => {
        const newUsers = users.map( user => user.id === id ? {...user, name, description, position} : user)
        setUsers(newUsers)
    }

    const removeUser = (id: number) => {
        const newUsers = users.filter( user => user.id !== id)
        setUsers(newUsers)
    }

    const nextUserState = (id: number):void => {
        const newUsers = users.map( user => user.id === id ? {...user, state: nextState(user.state)} : user)
        setUsers(newUsers)
    }

    const prevUserState = (id: number):void => {
        const newUsers = users.map( user => user.id === id ? {...user, state: prevState(user.state)} : user)
        setUsers(newUsers)
    }

    return (
        <usersContext.Provider value={{users, prevUserState, nextUserState, addUser, userEditState, setUserEditState, editUser, removeUser}}>
            {children}
        </usersContext.Provider>
    )
}