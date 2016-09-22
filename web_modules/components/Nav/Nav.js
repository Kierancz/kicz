import React, { Component, PropTypes } from "react"
import cx from "classnames"
import { Link } from "react-router"

import Navbar from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
// import NavDropdown from "react-bootstrap/lib/NavDropdown"
import styles from "./Nav.scss"

export default class NavComponent extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  handleCollaspeToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  handleOnNavItemClick = () => {
    this.setState({
      expanded: false,
    })
  }

  render() {
    const navClass = cx(styles.wrapper, {
      [styles.docked]: this.props.docked,
    })

    const NavItem = ({ to, name }) => ((
      <li>
        <Link
          to={ to }
          activeClassName="active"
          onClick={ this.handleOnNavItemClick }
        >
          { name }
        </Link>
      </li>
    ))

    return (
      <Navbar
        fluid
        fixedTop
        className={ navClass }
        expanded={ this.state.expanded }
        onToggle={ this.handleCollaspeToggle }
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className={ styles.logo } />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem to="/about/" name="About" />
            <NavItem to="/projects/" name="Projects" />
            <NavItem to="/contact/" name="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
}