import Styles from './Home.module.css'
import savings from '../Pages/Reciclagem.png'
import LinkButton from '../LinkButton'

function Home(){
    return(
        <section className={Styles.home_container}>
            <h1>Bem-vindo ao <span>Green-Hub</span></h1>
            <p>Conheça a empresa</p>
            <LinkButton to="/" text='Cadastrar empresa'/>
            <img src={savings} alt="Reciglagem"/>
        </section>
    )

}

export default Home