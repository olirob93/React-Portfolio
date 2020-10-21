import React from 'react';
import styles from './DesktopNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from '@reach/router';


const DesktopNav = () => {
    return (
        <div>
            <nav className={styles.leftNav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="bio">Bio</Link></li>
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
