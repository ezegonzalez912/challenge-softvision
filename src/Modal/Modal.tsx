import { useContext } from "react"
import { usersContext } from "../context/usersContext"

interface Props {
    isOpenModal: Boolean;
    isChangeModal: () => void;
    children: JSX.Element;
}

export const Modal: React.FC<Props> = ({isOpenModal, isChangeModal, children}) => {

    const { setUserEditState } = useContext(usersContext)

    const handleCancelModal = () => {
        setUserEditState(undefined)
        isChangeModal()
    }

    return (
        <div className={`modal__main ${isOpenModal && "modal__main-open"}`} onClick={handleCancelModal}>
            {children}
        </div>
    )
}