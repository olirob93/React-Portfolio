import React from 'react';
import styles from './DesktopNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from '@reach/router';
import CV from '../../assets/files/Nology cv (2).pdf'


const DesktopNav = () => {
    return (
        <div>
            <nav className={styles.leftNav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="bio">Bio</Link></li>
                <li><Link to="projects">Projects</Link></li>
                {/*<li><a>Blog</a></li>*/}
                <li><Link to="contact">Contact</Link></li>
                <li><a href={CV} target='_blank'>CV <span><FontAwesomeIcon icon='download' /></span></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default DesktopNav;
