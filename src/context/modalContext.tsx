import { createContext } from "react";
import { useModal } from "../hooks/useModal";

interface props {
    children: JSX.Element | JSX.Element[]
} 

type context = {
    isOpenModal: Boolean;
    isChangeModal: () => void;
}

export const modalContext = createContext({} as context);

export const ModalProvider = ({children}:props) => {

    const [isOpenModal, isChangeModal] = useModal();

    return (
        <modalContext.Provider value={{isOpenModal, isChangeModal}}>
            {children}
        </modalContext.Provider>
    )
}