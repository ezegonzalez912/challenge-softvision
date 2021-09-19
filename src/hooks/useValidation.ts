import { useEffect, useState } from "react"

export const useValidation = (initState: any) => {

    const [error, setError] = useState<string>("")

    useEffect(() => {
        if(initState.name.length < 6 || initState.description.length < 6 || initState.position.length < 6){
            return setError("Los campos no pueden contener menos de 6 caracteres")
        }
        if(initState.name.length > 20 || initState.description.length > 25 || initState.position.length > 15){
            return setError("Los campos no pueden contener demaciados caracteres")
        }
        setError("")
    }, [initState])

    return [error]
}
