import styles from './home.module.css'
import Button from '../layout/button'
function Home(){
    return (
        <section className={styles.home_container} >
      <h1>
        Bem-vindo ao <span>Plak</span>
      </h1>
      <p>Pesquisas de Animes e Mangás!</p>
      <Button>Começar</Button>
    </section>
    )
}
export default Home