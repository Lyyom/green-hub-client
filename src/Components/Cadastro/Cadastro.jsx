import styles from './Cadastro.module.css'
import CadastroForm from './CadastroForm'



function Cadastro(){
    return (
        <div className={styles.cadastro_container }>
            <h1>Cadastrar Empresa</h1>
            <p>Cadastre sua empresa para os vendedores ou compradores de materiais!</p>
            <CadastroForm/>
        </div>
    )

}

export default Cadastro