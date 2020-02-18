import React, { useState } from 'react'
import styles from "../css/navbar.module.css";
import {FaAlignRight} from 'react-icons/fa';
import Links from "../constants/Links";
import socialIcons from "../constants/socialIcons";
import logo from "../images/logo.svg";
import { Link } from 'gatsby';

const Navbar = () => {
    const [isOpen, setNav] = useState(false);

    const toogleNav = () => {
        setNav(isOpen => !isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <Link to="/"><img src={logo} alt=""/></Link>
                    <button className={styles.logoBtn} type="button" onClick={toogleNav}>
                        <FaAlignRight  className={styles.logoIcon}/>
                    </button>
                </div>
                <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}`: `${styles.navLinks}`}>
                    {Links.map((link, index) => {
                        return (<li key={index}><Link to={link.path}>{link.text}</Link></li>)
                    })}
                </ul>
                <div className={styles.navSocialLinks}>
                    {socialIcons.map((icon, index) => {
                        return <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">{icon.icon}</a>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
