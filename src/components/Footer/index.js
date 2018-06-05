import React from "react"
import Social from "../Social"
import styles from "./index.scss"

const Footer = () => {
  return(
    <footer className={ styles.footer }>
      <Social size={20}/>
      { " © 2017 Kieran Czerwinski" }
    </footer>);
}

export default Footer;