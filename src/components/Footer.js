import React from 'react';
import styles from "../css/footer.module.css";
import Links from "../constants/Links";
import socialIcons from "../constants/socialIcons";
import { Link } from 'gatsby';
import {FaRProject} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {Links.map((link, index) => {
                    return (<Link to={link.path}>{link.text}</Link>)
                })}
            </div>
            <div className={styles.icons}>
                {socialIcons.map((icon, index) => {
                    return <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">{icon.icon}</a>
                })}
            </div>
        </footer>
    )
}

export default Footer
