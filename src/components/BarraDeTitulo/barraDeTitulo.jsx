import { useContext } from 'react'
import { AppContext } from '../../context/context'
import styles from './BarraDeTitulo.module.css'
import Tema from './Tema/tema'

const BarraDeTitulo = () =>{
    const {temaSelecionado} = useContext(AppContext)
    function Estilizar(){
        if(temaSelecionado === '1'){
            return `${styles.BarraDeTitulo}`
        }
        else if(temaSelecionado === '2'){
            return `${styles.BarraDeTitulo} ${styles.SegundoTema}`
        }
        else if(temaSelecionado === '3'){
            return `${styles.BarraDeTitulo} ${styles.TerceiroTema}`
        }
    }
    return(
        <div className={Estilizar()}>
            <h1>Calc</h1>
            <Tema/>
        </div>
    )
}

export default BarraDeTitulo