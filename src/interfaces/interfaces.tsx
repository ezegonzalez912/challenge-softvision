export interface User {
    id: number,
    name: string,
    description: string,
    position: string,
    state: string,
    linkedin: string
}

export type Actions =
    | {type: "setUsers", payload: User[]}
    | {type: "addUser", payload: User}
    | {type: "editUser", payload: User}
    | {type: "removeUser", payload: number}
    | {type: "nextStateUser", payload: number}
    | {type: "prevStateUser", payload: number}