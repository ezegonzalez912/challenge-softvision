import { useContext, useEffect } from "react";
import { usersContext } from "../context/usersContext";
import { useForm } from "../hooks/useForm";
import { useValidation } from "../hooks/useValidation";

interface Props {
    isChangeModal: () => void;
}

export const ModalAddUser: React.FC <Props> = ({isChangeModal}) => {

    const { userEditState, setUserEditState, addUser, editUser } = useContext(usersContext);

    const handleModalDialogClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    const {form, handleChange, setForm} = useForm({
        name: "",
        description: "",
        position: "",
        linkedin: ""
    });

    useEffect(() => {
        setForm({
            name: userEditState?.name || "",
            description: userEditState?.description || "",
            position: userEditState?.position || "",
            linkedin: userEditState?.linkedin || ""
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editUser])

    const {name, description, position, linkedin} = form;

    const handleCancelModal = () => {
        isChangeModal()
        setUserEditState(undefined)
    }

    const handleSubmitModal = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(name.length >= 6 && position.length >= 6 && description.length >= 6 && name.length <= 20 && description.length <= 20 && position.length <= 15){
            if(userEditState){
                editUser(name, description, position.toUpperCase(), userEditState?.id, linkedin)
            }else{
                addUser(name, description, position.toUpperCase(), linkedin)
            }
            handleCancelModal()
            setUserEditState(undefined)
        }
    }

    const [error] = useValidation(form);

    return (
        <div className="modal-add-user" onClick={handleModalDialogClick}>
            {
                userEditState
                ? <h3>Editar candidato</h3>
                : <h3>Añadir candidato</h3>
            }
            <form onSubmit={handleSubmitModal}>
                <input autoComplete="off" name="name" placeholder="Nombre" value={name} onChange={handleChange}/>
                <input autoComplete="off" name="description" placeholder="Descripción" value={description} onChange={handleChange}/>
                <input autoComplete="off" name="position" placeholder="Posición" value={position} onChange={handleChange}/>
                <input autoComplete="off" name="linkedin" placeholder="Enlace de linkedin" value={linkedin} onChange={handleChange}/>
                <p className="msg-err">{error}</p>
                <button className="btn">{userEditState ? "Guardar" : "Añadir"}</button>
            </form>
            <button className="modal-btn-cancel" onClick={handleCancelModal}>Cancelar</button>
        </div>
    )
}
