import React from 'react';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <section className={styles.home}>
        <div>
            <h1>Ollie Robins</h1>
                <h2>Software Developer</h2>
                <button><a>View Portfolio</a></button>
                <button className={styles.mobOnly}><a href="#">CV <span><FontAwesomeIcon icon='download' /></span></a></button>
        </div>
        </section>
    )
}

export default Header;
