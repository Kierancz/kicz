import React, { Component, PropTypes } from "react"
import { Col } from "react-bootstrap/lib"

import styles from "./index.scss"

export default class Project extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    tools: PropTypes.array
  };

  render() {
    const imgUrl = this.props.imgUrl
    const title = this.props.title
    const desc = this.props.description

    //console.log("tools: " this.props.tools)

    return (
      <div>
        <Col xs={12} md={8}>
          <img 
            className={ styles.imgLeft } 
            src={ imgUrl } 
            alt={ title }/>
        </Col>
        <Col xs={12} md={4} className={ styles.textContainer }>
          <h2><b> { title }</b></h2>
          <p> { desc }
          </p>
        </Col>
      </div>
    )
  }
}