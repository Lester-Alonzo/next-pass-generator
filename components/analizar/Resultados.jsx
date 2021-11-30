import {useContext, useState} from 'react';
import style from '../../styles/Resultado.module.css';
import {Passcontext} from '../../context/Pass';
const Resultados = ({}) =>{
    const {Pass} = useContext(Passcontext)
    let long
    let mayus
    let minus
    let num
    let sing
    const validar = (pass) =>{
        let arr = pass.split("")
        let lon =  (arr.length);
        let nu =  (arr.filter((x) => x.charCodeAt() >= 48 && x.charCodeAt() <= 57))
        let my = (arr.filter((x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 90))
        let mi = (arr.filter((x) => x.charCodeAt() >= 97 && x.charCodeAt() <= 122))
        let sg = (arr.filter((x) => (x.charCodeAt() >= 33 && x.charCodeAt() <= 47) || (x.charCodeAt() >= 58 && x.charCodeAt() <= 64) || (x.charCodeAt() == 95)))
        if(nu.length != 0) {num = true} else {num = false}
        if(my.length != 0) {mayus = true} else {mayus = false}
        if(mi.length != 0) {minus = true} else {minus = false}
        if(sg.length != 0) {sing = true} else {sing = false}
        if(lon > 9) {long = true} else {long = false}
    }
    validar(Pass)
    console.log(long, mayus, minus, num, sing);
return (
<div className={style.contenedor}>
    <div className={style.tarjeta}>
        <h2>Fuerza de la contraseña:</h2>
        <ul className={style.lista}>
            <li>Minusculas:  <span className={minus? style.si : style.no}></span></li>
            <li>Mayusculas: <span className={mayus? style.si : style.no}></span></li>
            <li>Numeros: <span className={num? style.si : style.no}></span></li>
            <li>Signos: <span className={sing? style.si : style.no}></span></li>
            <li>Longitud: <span className={long? style.si : style.no}></span></li>
        </ul>
    </div>
</div>
)
}
export default Resultados