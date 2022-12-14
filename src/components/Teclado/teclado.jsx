import { useContext } from 'react'
import { AppContext } from '../../context/context'
import Botao from './Botao/botao'
import styles from './Teclado.module.css'

const Teclado = () =>{
    const {temaSelecionado} = useContext(AppContext)

    function Estilizar(){
        if(temaSelecionado === '1'){
            return `${styles.Teclado}`
        }
        else if(temaSelecionado === '2'){
            return `${styles.Teclado} ${styles.SegundoTema}`
        }
        else if(temaSelecionado === '3'){
            return `${styles.Teclado} ${styles.TerceiroTema}`
        }
    }

    return(
        <div className={Estilizar()}>
            <Botao texto='7' tipo='num'/>
            <Botao texto='8' tipo='num'/>
            <Botao texto='9' tipo='num'/>
            <Botao texto='DEL' tipo='del'/>
            <Botao texto='4' tipo='num'/>
            <Botao texto='5' tipo='num'/>
            <Botao texto='6' tipo='num'/>
            <Botao texto='+' tipo='simbol'/>
            <Botao texto='1' tipo='num'/>
            <Botao texto='2' tipo='num'/>
            <Botao texto='3' tipo='num'/>
            <Botao texto='-' tipo='simbol'/>
            <Botao texto=',' tipo='decimal'/>
            <Botao texto='0' tipo='num'/>
            <Botao texto='/' tipo='simbol'/>
            <Botao texto='x' tipo='simbol'/>
            <Botao texto='RESET' tipo='reset'/>
            <Botao texto='=' tipo='igual'/>
        </div>
    )
}

export default Teclado