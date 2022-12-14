import styles from './Botao.module.css'

import { useContext } from "react"
import { AppContext } from '../../../context/context'

const Botao = ({texto, tipo}) => {
    const {
        temaSelecionado,
        primeiroValor,
        operacao, 
        segundoValor, 
        setPrimeiroValor, 
        setOperacao, 
        setSegundoValor,
        resultado,
        setResultado,
        historico,
        setHistorico
    } = useContext(AppContext)

    function Estilizar(){
        if(temaSelecionado === '1'){
            if(tipo === 'num'){
                return `${styles.Botao}`
            }
            else if(tipo === 'simbol'){
                return `${styles.Botao}`
            }
            else if(tipo === 'decimal'){
                return `${styles.Botao}`
            }
            else if(tipo === 'del'){
                return `${styles.Botao} ${styles.BotaoDel}`
            }
            else if(tipo === 'igual'){
                return `${styles.Botao} ${styles.BotaoIgual}`
            }
            else if(tipo === 'reset'){
                return `${styles.Botao} ${styles.BotaoReset}`
            }
        }
        else if(temaSelecionado === '2'){
            if(tipo === 'num'){
                return `${styles.Botao} ${styles.BotaoSegundoTema}`
            }
            else if(tipo === 'simbol'){
                return `${styles.Botao} ${styles.BotaoSegundoTema}`
            }
            else if(tipo === 'decimal'){
                return `${styles.Botao} ${styles.BotaoSegundoTema}`
            }
            else if(tipo === 'del'){
                return `${styles.Botao} ${styles.BotaoDel} ${styles.BotaoDelSegundoTema}`
            }
            else if(tipo === 'igual'){
                return `${styles.Botao} ${styles.BotaoIgual} ${styles.BotaoIgualSegundoTema}`
            }
            else if(tipo === 'reset'){
                return `${styles.Botao} ${styles.BotaoReset} ${styles.BotaoResetSegundoTema}`
            }
        }
        else if(temaSelecionado === '3'){
            if(tipo === 'num'){
                return `${styles.Botao} ${styles.BotaoTerceiroTema}`
            }
            else if(tipo === 'simbol'){
                return `${styles.Botao} ${styles.BotaoTerceiroTema}`
            }
            else if(tipo === 'decimal'){
                return `${styles.Botao} ${styles.BotaoTerceiroTema}`
            }
            else if(tipo === 'del'){
                return `${styles.Botao} ${styles.BotaoDel} ${styles.BotaoDelTerceiroTema}`
            }
            else if(tipo === 'igual'){
                return `${styles.Botao} ${styles.BotaoIgual} ${styles.BotaoIgualTerceiroTema}`
            }
            else if(tipo === 'reset'){
                return `${styles.Botao} ${styles.BotaoReset} ${styles.BotaoResetTerceiroTema}`
            }
        }
    }

    function EscolherValor() {
        if(operacao === ''){
            if(historico !== ''){
                setHistorico('')
            }
            setPrimeiroValor(primeiroValor + texto)
        }
        else{
            setSegundoValor(segundoValor + texto)
        }
    }

    function EscolherOperacao(){
        if(primeiroValor === '' && resultado !== ''){
            setHistorico('')
            setPrimeiroValor(resultado)
            setOperacao(texto)
        }
        else if(primeiroValor !== '' && operacao === ''){
            setOperacao(texto)
        }
        else{alert('Defina um valor')}
    }

    function AdicionaDecimal(){
        if(segundoValor !== ""){
            if(segundoValor.includes(',')){
                alert('O valor já possui uma decimal')
            }
            else{
                setSegundoValor(segundoValor + ',')
            }
        }
        else if(operacao !== ''){
            setSegundoValor('0,')
        }
        else if(primeiroValor !== ''){
            if(primeiroValor.includes(',')){
                alert('O valor já possui uma decimal')
            }
            else{
                setPrimeiroValor(primeiroValor + ',')
            }
        }
        else if(primeiroValor === ''){
            setHistorico('')
            setPrimeiroValor('0,')
        }
    }

    function Deletar(){
        if(segundoValor !== ''){
            setSegundoValor(segundoValor.slice(0,-1))
        }
        else if(operacao !== ''){
            setOperacao('')
        }
        else if(primeiroValor !== ''){
            setPrimeiroValor(primeiroValor.slice(0,-1))
        }
        else if(historico !== ''){
            setHistorico('')
        }
    }
    
    function CalculaResultado(){
        function AtualizarInformacoes(){
            setHistorico(`${primeiroValor} ${operacao} ${segundoValor}`)
            setPrimeiroValor('')
            setSegundoValor('')
            setOperacao('')
        }

        if(segundoValor !== ''){
            if(operacao === '+'){
                setResultado(`${Number(primeiroValor.replace(',' , '.')) + Number(segundoValor.replace(',' , '.'))}`.replace('.' , ','))
                AtualizarInformacoes()
            }
            else if(operacao === '-'){
                setResultado(`${Number(primeiroValor.replace(',' , '.')) - Number(segundoValor.replace(',' , '.'))}`.replace('.' , ','))
                AtualizarInformacoes()
            }
            else if(operacao === 'x'){
                setResultado(`${Number(primeiroValor.replace(',' , '.')) * Number(segundoValor.replace(',' , '.'))}`.replace('.' , ','))
                AtualizarInformacoes()
            }
            else if(operacao === '/'){
                setResultado(`${Number(primeiroValor.replace(',' , '.')) / Number(segundoValor.replace(',' , '.'))}`.replace('.' , ','))
                AtualizarInformacoes()
            }
        }
        else{
            alert('Defina os valores para a operação.')
        }
    }

    function Resetar(){
        setPrimeiroValor('')
        setSegundoValor('')
        setOperacao('')
        setHistorico('')
        setResultado('')
    }

    function DefineFuncao(){
        if(tipo === 'num'){
            return EscolherValor
        }
        else if(tipo === 'simbol'){
            return EscolherOperacao
        }
        else if(tipo === 'del'){
            return Deletar
        }
        else if(tipo === 'decimal'){
            return AdicionaDecimal
        }
        else if(tipo === 'igual'){
            return CalculaResultado
        }
        else if(tipo === 'reset'){
            return Resetar
        }
    }

    return (
        <button className={Estilizar()} onClick={DefineFuncao()}>{texto}</button>
    )
}

export default Botao