import React from 'react'
import projects from '../../data/projects';
import Card from '../../components/Card';
import styles from './ProjectsPage.module.scss';
import { Link } from '@reach/router';


const ProjectsPage = () => {

    return (
        <section className={styles.projects}>
            <h3>Projects</h3>
            <div className={styles.cardContainer}>
                {projects.map((card) => <Link style={{textDecoration: "none"}} to={card.internalPage}> <Card key={card.id} cardData={card} /></Link>)}                   
            </div> 
        </section>
    )
}

export default ProjectsPage
