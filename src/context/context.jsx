import { createContext, useState } from "react";

export const AppContext = createContext()

const AppProvider = ({children}) =>{
    const [temaSelecionado, setTemaSelecionado] = useState('1')
    const [primeiroValor, setPrimeiroValor] = useState('')
    const [operacao, setOperacao] = useState('')
    const [segundoValor, setSegundoValor] = useState('')
    const [resultado, setResultado] = useState('')
    const [historico, setHistorico] = useState('')
  
    return(
        <AppContext.Provider value={
            {
                temaSelecionado,
                setTemaSelecionado,
                primeiroValor,
                setPrimeiroValor, 
                operacao, 
                setOperacao, 
                segundoValor, 
                setSegundoValor,
                resultado,
                setResultado,
                historico,
                setHistorico
            }
        }>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;