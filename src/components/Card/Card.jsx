import React, { useEffect } from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = (props) => { 

const {
  id,
  name,
  cardText,
  image,
  GitUrl,
  liveSiteUrl
} = props.cardData

useEffect(()=>{
  AOS.init({ duration: 1000 })
}, [])

  return (
    <div data-aos='slide-left' className={styles.card}>
      <img className={styles.cardImg} src={image} alt={name}/>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle} >{name}</h5>
        <p className={styles.cardText}>{cardText}</p>
        <div className={styles.cardLinks}>
          <a href={liveSiteUrl} target="_blank">
            <FontAwesomeIcon icon={["fab", "chrome"]} />
          </a>
          <a href={GitUrl} target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
