import React from 'react';
import styles from './Bio.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profilePic from '../../assets/images/profile pic.png';

const Bio = (props) => {

const {bio1, bio2, bio3} = props.text;

    return (
        <section className={styles.bio}>     
            <div className={styles.aboutHeader}>
                <h3>ABOUT ME</h3>            
                <img src={profilePic} alt="profile picture of me"/>
            </div>
                <p>{bio1}</p>
                <p>{bio2}</p> 
                <p>{bio3}</p>  
        <div className={styles.skillsIcons}>
            <span><FontAwesomeIcon icon={["fab", "html5"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "css3-alt"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "js"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "react"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "sass"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "bootstrap"]} /></span>
        </div>
        <div className={styles.skillsIcons}>  
            <span><FontAwesomeIcon icon={["fab", "git"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "github"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "node"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "yarn"]} /></span>
            <span><FontAwesomeIcon icon={["fab", "npm"]} /></span>
            <span><FontAwesomeIcon icon='database' /></span>
        </div>
        </section>        
    );
}

export default Bio;
