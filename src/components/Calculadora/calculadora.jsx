import { useContext } from 'react'
import { AppContext } from '../../context/context'
import BarraDeTitulo from '../BarraDeTitulo/barraDeTitulo'
import Display from '../Display/display'
import Teclado from '../Teclado/teclado'
import styles from './Calculadora.module.css'

const Calculadora = () =>{
    const {temaSelecionado} = useContext(AppContext)

    function Estilizar(){
        if(temaSelecionado === '1'){
            return `${styles.BoxCalculadora}`
        }
        else if(temaSelecionado === '2'){
            return `${styles.BoxCalculadora} ${styles.SegundoTema}`            
        }
        else if(temaSelecionado === '3'){
            return `${styles.BoxCalculadora} ${styles.TerceiroTema}`
        }
    }

    return(
        <div className={Estilizar()}>
            <div className={styles.Calculadora}>
                <BarraDeTitulo/>
                <Display/>
                <Teclado/>
            </div>
        </div>
    )
}

export default Calculadora