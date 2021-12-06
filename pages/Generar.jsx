import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toaster, toast} from 'react-hot-toast';
import style from '../styles/Generar.module.css'
const Generar = ({}) =>{
    const [leng, setLeng] = useState(12)
    const [mostrar, setMostrar] = useState(false)
    const [pas, setPas] = useState("")
    //length es de 70
    let hash = "aA0!bB1#cC2$dD3%eE4&fF5*gG6+hH7-iI8.Jj9/Kk:lL<mM;nN>ñÑ=oO?pP@qQ_rRsStTuUvVxXyYz"
    let final = ""
    
    const Pass= (long) => {
        while(final.length != long){
        const random = Math.floor(Math.random() * (69 - 0)) + 0;
        final += hash[random]
        }
        setPas(final)
    }
    const inu = (e) => {
        setLeng(e.target.value)
    }
    const hacer = () =>{
        Pass(leng)
        setMostrar(true)
    }

return (
<div className={style.contenedor}>
    <Toaster/>
    <div className={style.tarjeta}>
    <h1>Generar Contraseña Segura:</h1>
    <ul className={style.lista}>
        <li>Minusculas <span className={style.si}></span></li>
        <li>Mayusculas <span className={style.si}></span></li>
        <li>Numeros <span className={style.si}></span></li>
        <li>Signos <span className={style.si}></span></li>
        <li className={style.lonjj}>Longitud  <input value={leng} onInput={inu} type="number" placeholder="Ingresa la longitud que desees" /></li>
    </ul>
    <button onClick={hacer}>Generar</button>
    </div>
    {mostrar? (
        <div className={style.tarjeta}>
            <h2 className={style.verde}>{pas}</h2>
            <CopyToClipboard text={pas}>
                <button onClick={() => toast.success('Copiado')}>Copiar</button>
            </CopyToClipboard>
        </div>
    ) : null}
</div>
)
}
export default Generar