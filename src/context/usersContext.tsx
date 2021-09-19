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
    addUser: (name: string, description: string, position: string, linkedin: string) => void;
    editUser: (name: string, description: string, position: string, id: number, linkedin: string) => void;
    removeUser: (id: number) => void;
    userEditState: User | undefined;
    setUserEditState: any;
}

const initState = [
    {
        id: 1,
        name: "Ezequiel Gonzalez",
        description: "Tiene buena pinta.",
        position: "FRONTEND",
        state: "interviewsInitial",
        linkedin: "https://drive.google.com/file/d/1XL0G_11aQ71LQwiAZGUH0cFHXLNik5_4/view?usp=sharing"
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

    const addUser = (name: string, description: string, position: string, linkedin: string) => {
        const newUser = {
            id: new Date().valueOf(),
            name,
            description,
            position,
            state: "interviewsInitial",
            linkedin
        }
        setUsers([...users, newUser])
    }

    const editUser = (name: string, description: string, position: string, id: number, linkedin: string) => {
        const newUsers = users.map( user => user.id === id ? {...user, name, description, position, linkedin} : user)
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