import React, { Component } from "react"
import { Link } from "react-router"

import Social from "../Social"
import styles from "./index.scss"

export default class Footer extends Component {

  render() {
    return (
      <footer className={ styles.footer }>
        <Social size={20}/>
        { "© 2017 Kieran Czerwinski | " }
        { "Pages: " }
        <Link
          className={ styles.link }
          to="/404.html"
        >
          { "404" }
        </Link>
        { ", " }
        <Link
          className={ styles.link }
          to="/loading/"
        >
          { "Loading" }
        </Link>
      </footer>
    )
  }
}
