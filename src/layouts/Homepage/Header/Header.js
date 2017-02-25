import React, { Component } from "react"
import styles from "./Header.scss"
import { Link } from "react-router"
import Button from "react-bootstrap/lib/Button"
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
            It has an incredible potential to unite , to pool our 
            collective knowledge, and empower those courageous 
            enough to better themselves and the world we share.
            <br /><br />
            As a fledgling web developer, I am excited to be learning
            more everyday so that I can take a small part in creating 
            a more inspiring, intuitive, and accessible experience for users of 
            all backgrounds.  
          </p>
          <ButtonToolbar className={ styles.center }>
          <Link to="/about.html">
            <Button className="fill">About Me</Button>
          </Link>
          <Link to="/projects.html">
            <Button bsStyle="primary" className="fill">Projects</Button>
          </Link>
          </ButtonToolbar>
        </div>
      </header>
    )
  }
}

export default HomepageHeader