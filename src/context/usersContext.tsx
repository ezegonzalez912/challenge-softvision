import { createContext, useEffect, useReducer, useState } from "react";
import { User } from "../interfaces/interfaces";
import { usersReducer } from "./usersReducer";

interface props {
    children: JSX.Element | JSX.Element[]
} 

type context = {
    users: User[];
    dispatch: any;
    userEditState: User | undefined;
    setUserEditState: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const initState = [
    {
        id: 1,
        name: "Ezequiel Gonzalez",
        description: "Tiene buena pinta.",
        position: "FRONTEND",
        state: "interviewsInitial",
        linkedin: "https://www.linkedin.com/in/ezequiel-gonzalez-9a17b3208/"
    }
]

export const usersContext = createContext({} as context);

export const UsersProvider = ({children}:props) => {

    const [users, dispatch] = useReducer(usersReducer, initState)
    const [userEditState, setUserEditState] = useState<User | undefined>(undefined)

    useEffect(() => {
        const data = window.localStorage.getItem("challenge-softvision-users-121214");
        const users = data ? JSON.parse(data).users : initState;
        dispatch({type: "setUsers", payload: users})
    }, [])

    useEffect(() => {
        localStorage.setItem("challenge-softvision-users-121214", JSON.stringify({users}))
    }, [users])

    return (
        <usersContext.Provider value={{users, userEditState, setUserEditState, dispatch}}>
            {children}
        </usersContext.Provider>
    )
}