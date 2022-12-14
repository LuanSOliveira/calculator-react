import { useContext } from 'react'
import { AppContext } from '../../../context/context'
import BotaoTema from '../BotaoTema/botaoTema'
import styles from './Tema.module.css'

const Tema = () =>{
    const {temaSelecionado} = useContext(AppContext)
    function Estilizar(){
        if(temaSelecionado === '1'){
            return `${styles.Tema}`
        }
        else if(temaSelecionado === '2'){
            return `${styles.Tema} ${styles.SegundoTema}`
        }
        else if(temaSelecionado === '3'){
            return `${styles.Tema} ${styles.TerceiroTema}`
        }
    }

    return(
        <div className={Estilizar()}>
            <p>Tema</p>
            <div>
                <BotaoTema tema='1'/>
                <BotaoTema tema='2'/>
                <BotaoTema tema='3'/>
            </div>
        </div>
    )
}

export default Tema