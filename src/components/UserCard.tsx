import { User } from "../interfaces/interfaces"
import { usersContext } from "../context/usersContext";
import { useContext } from "react";
import { modalContext } from "../context/modalContext";
import { Remove } from "../assets/Remove";
import { Edit } from "../assets/Edit";
import { ArrowLeft } from "../assets/ArrowLeft";
import { ArrowRight } from "../assets/ArrowRight";

interface Props {
    user: User
}

export const UserCard: React.FC<Props> = ({ user }) => {

    const { prevUserState, nextUserState, setUserEditState, removeUser } = useContext(usersContext);
    const { isChangeModal } = useContext(modalContext);

    const editUser = () => {
        isChangeModal()
        setUserEditState(user)
    }

    return (
        <div className="user-container">
            <div className="user-arrow" onClick={() => prevUserState(user.id)}>
                <ArrowLeft />
            </div>
            <div className="user">
                <p className="user__name">{user.name}</p>  
                <p className="user__description">{user.description}</p>
                <div className="user__more">
                    <p className="user__more__position">{user.position}</p>
                    {
                        (user.cv && user.cv?.length > 1) && <a className="user__more__cv" href={user.cv} target="_blank">Descargar cv</a>
                    }
                </div>
            </div>
            <div className="user-icons">
                <div onClick={editUser} className="icon-edit">
                    <Edit />
                </div>
                <div onClick={() => removeUser(user.id)} className="icon-remove">
                    <Remove />
                </div>
            </div>
            <div className="user-arrow" onClick={() => nextUserState(user.id)}>
                <ArrowRight />
            </div>
        </div>
    )
}
