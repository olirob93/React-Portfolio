import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <section className={styles.home}>
        <div>
            <h1>Ollie Robins</h1>
                <h2>Software Developer</h2>
                <a>View Portfolio</a>
                <a className={styles.mobOnly} href="#">CV <span><FontAwesomeIcon icon='download' /></span></a>
        </div>
        </section>
    )
}

export default Header;
