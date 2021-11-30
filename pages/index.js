import style from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={style.contenedor}>
      <p className={style.para}>
        Con esta aplicacion puedes analizar tu contraseña para ver si es una contraseña fuerte mediana o debil, como tambien puedes generar una contraseña que sea lo sufiencete fuerte para no tener que preocuparte de nada
      </p>
    </div>
  )
}
