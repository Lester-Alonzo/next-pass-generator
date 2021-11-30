import styles from '../styles/Header.module.css'
import Link from 'next/link';
const Header = ({}) =>{
return (
<nav className={styles.nave}>
   <Link href="/Analizar"><button>Analizar</button></Link> 
   <Link href="/Generar"><button>Generar</button></Link> 
</nav>
)
}
export default Header