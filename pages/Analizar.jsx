import {useContext, useEffect} from 'react';
import {Passcontext} from '../context/Pass';
import style from '../styles/Analizar.module.css';
import Buscador from '../components/analizar/Buscador';
import Resultados from '../components/analizar/Resultados';
const Analizar = ({}) =>{
    const {Pass} = useContext(Passcontext)
return (
<div className={style.contenedor}>
    <h1 className={style.title}>Analizar Contraseña:</h1>
    <Buscador/>
    {Pass != ""? <Resultados/> : null}
    
</div>
)
}
export default Analizar