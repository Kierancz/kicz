import React, { Component } from "react"
import styles from "./Header.scss"
import { Link } from "react-router"
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar"

class HomepageHeader extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.intro }>
          <h1>Hi there,</h1>

          <h2>I'm Kieran, a mild-mannered maker
          and front-end engineering & design geek.</h2>
          <br />
          <p>
            I believe the web is humanity's greatest creation. 
            It has an incredible potential to unite all the 
            lovely people of the world, to pool our 
            collective knowledge, and empower those courageous 
            enough to better themselves and the world we share.
            <br /><br />
            As a growing web developer, I am excited to be learning
            more everyday so that I can take a small part in creating 
            a more inspiring, intuitive, and accessible experience for users of 
            all backgrounds.  
          </p>
          <ButtonToolbar className={ styles.center }>
          <Link to="/about"
            className="btn draw">About Me
          </Link>
          <Link to="/projects"
            className="btn draw">Projects
          </Link>
          </ButtonToolbar>
        </div>
      </header>
    )
  }
}

export default HomepageHeader