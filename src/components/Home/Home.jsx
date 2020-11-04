import React from 'react';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from '@reach/router';
import CV from '../../assets/files/Nology cv (2).pdf'

const Home = () => {
    return (
        <section className={styles.home}>
        <div>
            <h1>Ollie Robins</h1>
                <h2>Software Developer</h2>
                <Link to='projects'>View Portfolio</Link>
                <a className={styles.mobOnly} href={CV} target='_blank'>CV <span><FontAwesomeIcon icon='download' /></span></a>
        </div>
        </section>
    )
}

export default Home;
