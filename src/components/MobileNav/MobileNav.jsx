import React from 'react';
import styles from './MobileNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from '@reach/router';

const MobileNav = () => {
return (
    <nav className={styles.mobileNav}>        
        <ul className={styles.navItems}>
            <li><Link to="/"><FontAwesomeIcon icon='home' /></Link></li>
            <li><Link to="bio"><FontAwesomeIcon icon='address-card' /></Link></li>
            <li><Link to="projects"><FontAwesomeIcon icon='folder-open' /></Link></li>
            {/*<li><a><FontAwesomeIcon icon='blog' /></a></li>*/}
            <li><Link to="contact"><FontAwesomeIcon icon='envelope' /></Link></li>
        </ul> 
    </nav>
)
}

export default MobileNav;