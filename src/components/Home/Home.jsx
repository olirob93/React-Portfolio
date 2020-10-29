import React from 'react';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from '@reach/router';

const Home = () => {
    return (
        <section className={styles.home}>
        <div>
            <h1>Ollie Robins</h1>
                <h2>Software Developer</h2>
                <Link to='projects'>View Portfolio</Link>
                <a className={styles.mobOnly} href="#">CV <span><FontAwesomeIcon icon='download' /></span></a>
        </div>
        </section>
    )
}

export default Home;
