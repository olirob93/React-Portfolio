import React from "react";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CV from '../../assets/files/Nology cv (2).pdf'

const Contact = () => {
  return (
    <section className={styles.contact}>
            <h3>Contact</h3>
            <div className={styles.contDets}>
                <h4>Phone Number</h4>
                <p>07941601342</p>
                <h4>Email Address</h4>
                <p>ollierobins93@gmail.com</p>
                <h4>Location</h4>
                <p>Surrey, KT8</p>
                <h4>CV</h4>
                <a href={CV} target="_blank"><p>Download <span><FontAwesomeIcon icon={["fab", "download"]} /></span></p></a>
            </div>
            <div className={styles.iconLinks}>
                <a href="https://www.linkedin.com/in/ollierobins/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                <a href="https://github.com/olirob93" target="_blank"><FontAwesomeIcon icon={["fab", "github-square"]} /></a>
            </div>
        </section>
  );
};

export default Contact;
