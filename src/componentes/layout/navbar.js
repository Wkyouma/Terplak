import {Link} from 'react-router-dom'
import Container from './container'
import styles from  './navbar.module.css'
import logo from "../../img/costs_logo.png"
function Navbar(){
     return(
        <nav className={styles.navbar}>
            <Container>
            <Link to="/">
                <img src={logo} alt="Costs" className={styles.logo} />
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item } >
                        <Link to='/'>Home</Link>
                    </li>
                    <li class={styles.item} >
                        <Link to='/manga'>Manga</Link>
                    </li>
                    <li class={styles.item } >
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <li class={styles.item } >
                        <Link to='/animes'>Animes</Link>
                    </li>    
                </ul>
            </Container>
        </nav> 
    )
}
export default Navbar