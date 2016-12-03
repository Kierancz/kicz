import React, { Component } from "react"
import styles from "./Header.scss"
import Button from "react-bootstrap/lib/Button"
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar"

class HomepageHeader extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.intro }>
          <h1>Hi there,</h1>

          <h2>I'm Kieran, a mild-mannered maker
          and front-end engineering and design geek.</h2>
          <p>
            I believe the web is humanity's greatest creation. 
            <br /><br />
            It has an incredible potential to unite all the lovely 
            people of the world, to pool our collective knowledge, 
            and empower those courageous enough to better themselves
            and the world we share.
            <br /><br />
            As a fledgling web developer, I am humbled to be able
            take a small part in creating a more intuitive and 
            accessible experience for users of all backgrounds.  
          </p>
          <ButtonToolbar className={ styles.center }>
            <Button>More Me!</Button>
            <Button bsStyle="primary">My Projects</Button>
          </ButtonToolbar>
        </div>
      </header>
    )
  }
}

export default HomepageHeader