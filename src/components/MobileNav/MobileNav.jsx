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
            <li><a><FontAwesomeIcon icon='folder-open' /></a></li>
            <li><a><FontAwesomeIcon icon='blog' /></a></li>
            <li><a><FontAwesomeIcon icon='envelope' /></a></li>
        </ul> 
    </nav>
)
}

export default MobileNav;