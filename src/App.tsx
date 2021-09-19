import { HomeScreen } from "./components/HomeScreen"
import { ModalProvider } from "./context/modalContext"
import { ThemeProvider } from "./context/themeContext"
import { UsersProvider } from "./context/usersContext"

export const App = () => {
    return (
        <ThemeProvider>
          <UsersProvider>
            <ModalProvider>
              <HomeScreen /> 
            </ModalProvider> 
          </UsersProvider>
        </ThemeProvider>
    )
}
