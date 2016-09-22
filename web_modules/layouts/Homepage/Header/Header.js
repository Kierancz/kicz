import React, { Component } from "react"
import styles from "./Header.scss"

class HomepageHeader extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.intro }>
          <h1>Hi there,</h1>

          <h2>I'm Kieran, a front end engineer and designer.</h2>
          <p>
            I love making the web more useful and enjoyable
            with simple structures and a focused attention to 
            detail. I believe the web has an incredible power
            to transform lives and that web design needs to 
            be equitable and accessible to all. 
          </p>
        </div>
      </header>
    )
  }
}

export default HomepageHeader