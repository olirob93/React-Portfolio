import React from 'react';
import styles from './DesktopNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DesktopNav = () => {
    return (
        <div>
            <nav className={styles.leftNav}>
            <ul>
                <li><a>Home</a></li>
                <li><a>Bio</a></li>
                <li><a>Projects</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
                <li><a>CV <span><FontAwesomeIcon icon='download' /></span></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default DesktopNav;
