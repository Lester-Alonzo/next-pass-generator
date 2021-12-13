import styles from "../../styles/Barra.module.css"
const Barra = ({total}) => {
    console.log(total)
   if(total <= 3){
       console.log("Fase uno")
        return (
    <>
        <div className={styles.barra1}>Es muy baja</div>
    </>
    )
   }else if(total == 4){
       console.log("Fase dos")
        return (
        <>
        <div className={ styles.barra2}>Esta bien pero no es perfecta</div>
     </>
    )
   }else if(total == 5){
       console.log("Fase tres")
     return (
     <>
        <div className={styles.barra3}>Excelente!!!</div>
     </>
     )
   }
}

export default Barra
