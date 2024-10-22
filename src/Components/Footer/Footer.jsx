import { FaGithub } from "react-icons/fa";

import styles from './Footer.module.css'


function Footer(){

    return(
        <footer className ={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/Lyyom/green-hub-client" target="blank" rel="noopener noreferrer">
                    <FaGithub/>
                    </a> 
                    </li>
            </ul>

            <p className={styles.copy_rigth}>
               <span>Green-Hub</span> &copy; 2024
            </p>
        </footer>
    )

}

export default Footer