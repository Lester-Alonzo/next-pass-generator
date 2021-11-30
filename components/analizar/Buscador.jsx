import {useContext, useState} from 'react';
import {Toaster, toast} from 'react-hot-toast'
import {Passcontext} from '../../context/Pass';
import styles from '../../styles/Buscador.module.css';
const Buscador = ({}) =>{
    const [varibale, setVariable] = useState("")
    const {setPass} = useContext(Passcontext) 
    const cambio = (e) =>{
        setVariable(e.target.value)
    }
    const setear = (e) => {
    if(varibale == "") return toast.error("Es necesaria la contraseña")
    setPass(varibale)
    setVariable("")
    }
return (
<div className={styles.contenedor}>
    <Toaster/>
    <input value={varibale} className={styles.input} type="password"  placeholder='Ingerse su contraseña' onInput={cambio}/>
    <button onClick={setear} className={styles.btn}>Buscar</button>
</div>
)
}
export default Buscador