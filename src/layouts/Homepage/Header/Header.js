import React, { Component } from "react"
import styles from "./Header.scss"
import { Link } from "react-router"
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar"
import { MdAccountCircle, MdBuild } from "react-icons/lib/md"

class HomepageHeader extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.intro }>
          <h1>Hi there,</h1>

          <h2>I'm Kieran, a mild-mannered maker
          and web engineering & design geek.</h2>
          <br />
          <p>
            I love building cool things. These days I work mostly in JavaScript
            writing highly reusable, functional, and efficient code. I'm
            constantly learning and working to create the most intuitive and
            accessible user interfaces on any platform.
          </p>
          <ButtonToolbar className={ styles.center }>
          <Link to="/about.html"
            className="btn draw">
            <MdAccountCircle
              className="butIcon"
              size={30}/>
              About Me
          </Link>
          <Link to="/projects.html"
            className="btn draw">
            <MdBuild
              className="butIcon"
              size={30}/>
              Projects
          </Link>
          </ButtonToolbar>
        </div>
      </header>
    )
  }
}

export default HomepageHeader
