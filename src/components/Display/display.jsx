import { useContext } from "react"
import { AppContext } from "../../context/context"
import styles from "./Display.module.css"

const Display = () =>{
    const {temaSelecionado, primeiroValor, operacao, segundoValor, resultado, historico} = useContext(AppContext)

    function Estilizar(){
        if(temaSelecionado === '1'){
            return `${styles.Display}`
        }
        else if(temaSelecionado === '2'){
            return `${styles.Display} ${styles.SegundoTema}`
        }
        else if(temaSelecionado === '3'){
            return `${styles.Display} ${styles.TerceiroTema}`
        }
    }

    return(
        <div className={Estilizar()}>
            <div className={styles.Calculo}>
                <p className={styles.HistoricoOperacao}>{historico}</p>
                <p className={styles.PrimeiroValor}>{primeiroValor}</p>
                <p className={styles.Operacao}>{operacao}</p>
                <p className={styles.SegundoValor}>{segundoValor}</p>
            </div>
            <div className={styles.Resultado}>
                <p className={styles.ValorResultado}>{resultado}</p>
            </div>
        </div>
    )
}

export default Display