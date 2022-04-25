import { useState, createContext } from "react";

export const UserContext = createContext({})

function UserProvider({children}){
    const [tituloDaVaga, setTituloDaVaga] = useState('')
    const [descricaoDaVaga, setDescricaoDaVaga] = useState('')
    const [empresaContratante, setEmpresaContratante] = useState('')
    const [emailContato, setEmailContato] = useState('')
    const [salarioOferecido, setSalarioOferecido] = useState('')
    const [minhasVagas, setVagas] = useState([])

    return(
        <UserContext.Provider value={{tituloDaVaga, descricaoDaVaga, empresaContratante, emailContato, salarioOferecido, minhasVagas}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider