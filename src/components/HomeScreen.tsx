import { useContext } from "react"
import { modalContext } from "../context/modalContext";
import { themeContext } from "../context/themeContext";
import { usersContext } from "../context/usersContext";
import { User } from "../interfaces/interfaces";
import { Modal } from "../Modal/Modal";
import { ModalAddUser } from "../Modal/ModalAddUser";
import { CardSection } from "./CardSection";
import Switch from "react-switch";

export const HomeScreen = () => {
    
    const { darkMode, setDarkMode } = useContext(themeContext);
    const { users } = useContext(usersContext);

    const usersFiltred = (state: string): User[] => {
        return users.filter(user => user.state === state)
    }

    const {isOpenModal, isChangeModal} = useContext(modalContext);
    
    return (
        <div className={`home-screen ${darkMode ? "dark-theme" : "light-theme"}`}>
            <Modal isOpenModal={isOpenModal} isChangeModal={isChangeModal}>
                <ModalAddUser isChangeModal={isChangeModal}/>
            </Modal>
            <nav className="nav">
                <h1>Gestor de cantidatos</h1>
                <button className="btn" onClick={isChangeModal} style={{padding:"10px 15px", fontSize:"18px"}}>Añadir candidato</button>
                <div className="toggle-theme">
                    <label style={{fontSize:"20px"}}>Modo oscuro</label>
                    <Switch onChange={() => setDarkMode(!darkMode)} checked={darkMode} onColor="#BA3CC2" offColor="#518EC7"/>
                </div>
            </nav>
            <section className="sections-grid">
                <CardSection users={usersFiltred("interviewsInitial")} title={"Entrevista inicial"} />
                <CardSection users={usersFiltred("interviewsTechnique")} title={"Entrevista técnica"} />
                <CardSection users={usersFiltred("offer")} title={"Oferta"} />
                <CardSection users={usersFiltred("assignment")} title={"Asignación"} />
                <CardSection users={usersFiltred("rejection")} title={"Rechazo"} />
            </section>
        </div>
    )
}
