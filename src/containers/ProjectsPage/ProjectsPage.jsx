import React from 'react'
import projects from '../../data/projects';
import Card from '../../components/Card';
import styles from './ProjectsPage.module.scss';


const ProjectsPage = () => {

    return (
        <section className={styles.projects}>
            <h3>Projects</h3>
            <div className={styles.cardContainer}>
                {projects.map((card) => <Card key={card.id} cardData={card} />)}   
            </div> 
        </section>
    )
}

export default ProjectsPage
