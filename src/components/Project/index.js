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
    const tools = this.props.tools.map((tool) =>
      <div key={tool.id}>
        <h4>{tool.name}</h4>
      </div> 
    );

    console.log("tools: ", tools)

    return (
      <div className={ styles.project }>
        <Col xs={12} md={8}>
          <img 
            className={ styles.imgLeft } 
            src={ imgUrl } 
            alt={ title }/>
        </Col>
        <Col xs={12} md={4} className={ styles.textContainer }>
          <h2><b> { title }</b></h2><hr/>
          <p> { desc }
          </p>
          <h3>Built with: </h3>

            { tools }
        </Col>
      </div>
    )
  }
}