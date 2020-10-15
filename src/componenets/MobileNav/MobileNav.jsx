import React from 'react';
import styles from './MobileNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = () => {
return (
    <nav className={styles.mobileNav}>        
        <ul className={styles.navItems}>
            <li><a><FontAwesomeIcon icon='home' /></a></li>
            <li><a><FontAwesomeIcon icon='address-card' /></a></li>
            <li><a><FontAwesomeIcon icon='folder-open' /></a></li>
            <li><a><FontAwesomeIcon icon='blog' /></a></li>
            <li><a><FontAwesomeIcon icon='envelope' /></a></li>
        </ul> 
    </nav>
)
}

export default MobileNav;