import React, { Component, PropTypes } from "react"
import cx from "classnames"
import { Link } from "react-router"
import Navbar, { 
  Header, 
  Brand, 
  Toggle, 
  Collapse, 
} from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
// import NavDropdown from "react-bootstrap/lib/NavDropdown"
import styles from "./Nav.scss"
import klogo1 from "./klogo1.png"

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
        <Header>
          <Brand>
            <Link to="/">
              <img src={ klogo1 } className={ styles.logo } />
            </Link>
          </Brand>
          <Toggle />
        </Header>
        <Collapse>
          <Nav pullRight>
            <NavItem to="/about.html" name="About" />
            <NavItem to="/projects.html" name="Projects" />
            <NavItem to="/contact.html" name="Contact" />
          </Nav>
        </Collapse>
      </Navbar>
      )
  }
}
