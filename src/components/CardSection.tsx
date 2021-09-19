import { User } from "../interfaces/interfaces"
import { UserCard } from "./UserCard";

interface Props {
    users: User[];
    title: String;
}

export const CardSection: React.FC<Props> = ({ users, title }) => {

    return (
        <div className="card-container">
            <h1>{title}</h1>
            <div className="line"/>
            {
                users.map( user => (
                    <UserCard key={user.id} user={user}/>
                ))
            }
        </div>
    )
}
