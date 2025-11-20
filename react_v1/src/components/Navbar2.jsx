import styles from './Navbar2.module.css'
import { House } from 'lucide-react';

function NavBar2() {

    return (
        <nav className = {styles.nav}>
            <p>Dante Hernandez</p>
            <ul>
                <li><House/> Home </li>
                <li> About Me </li>
                <li> Projects </li>
                <li> Contact </li>
            </ul>
        </nav>
    );
}

export default NavBar2;