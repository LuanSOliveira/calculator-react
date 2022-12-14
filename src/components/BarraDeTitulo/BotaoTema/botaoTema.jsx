import { useContext } from 'react'
import { AppContext } from '../../../context/context'
import styles from './BotaoTema.module.css'

const BotaoTema = ({tema}) => {
    const {temaSelecionado, setTemaSelecionado} = useContext(AppContext)
    function DefineTema(){
        if(tema === '1'){
            if(temaSelecionado === '1'){
                return `${styles.BotaoTema} ${styles.PrimeiroTema} ${styles.Selecionado}`
            }
            else{
                return `${styles.BotaoTema} ${styles.PrimeiroTema}`
            }
        }
        else if(tema === '2'){
            if(temaSelecionado === '2'){
                return `${styles.BotaoTema} ${styles.SegundoTema} ${styles.Selecionado}`
            }
            else{
                return `${styles.BotaoTema} ${styles.SegundoTema}`
            }
        }
        else if(tema === '3'){
            if(temaSelecionado === '3'){
                return `${styles.BotaoTema} ${styles.TerceiroTema} ${styles.Selecionado}`
            }
            else{
                return `${styles.BotaoTema} ${styles.TerceiroTema}`
            }
        }

    }

    function MudarTema(){
        setTemaSelecionado(tema)
    }

    return(
        <button className={DefineTema()} onClick={MudarTema}></button>
    )
}

export default BotaoTema