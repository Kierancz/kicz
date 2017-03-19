import React, { Component, PropTypes } from "react"
import SVGInline from "react-svg-inline"
import cx from "classnames"
import { Link } from "react-router"
import Navbar, { 
  Header, 
  Toggle, 
  Collapse, 
} from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
// import NavDropdown from "react-bootstrap/lib/NavDropdown"
import styles from "./Nav.scss"
import logo from "./kInfinSVGwhite.svg"
//import Headroom from "react-headroom"

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
          <Link to="/">
            <SVGInline 
              svg={ logo } 
            />
          </Link>
          <Toggle />
        </Header>
        <Collapse>
          <Nav pullRight>
            <NavItem to="/about.html" name="About" />
            <NavItem to="/projects.html" name="Projects" />
            <NavItem to="/photos.html" name="Photography" />
            <NavItem to="/blog.html" name="Blog" />
            <NavItem to="/contact.html" name="Contact" />
          </Nav>
        </Collapse>
      </Navbar>
      )
  }
}
