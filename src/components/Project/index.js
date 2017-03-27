import React, { Component, PropTypes } from "react"
import { Col } from "react-bootstrap/lib"
//import SVGInline from "react-svg-inline"

import styles from "./index.scss"
import { MdCode, MdLaunch } 
  from "react-icons/lib/md"


export default class Project extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tools: PropTypes.array,
    demoUrl: PropTypes.string,
    codeUrl: PropTypes.string,
  };

  render() {
    const imgUrl = this.props.imgUrl
    const title = this.props.title
    const desc = this.props.description
    const demoUrl = this.props.demoUrl
    const codeUrl = this.props.codeUrl
    const iconSize = 30
    let dURL = ""
    let cURL = ""

    const tools = this.props.tools.map((tool) =>
      <div key={ tool.id }>
        <a target="_blank" href={ tool.link }>
          <img href={ tool.icon }/>
          { tool.name }
        </a>
      </div> 
    );

    if(demoUrl) {
      dURL = 
      <div className="round-btn blue">
        <a href={ demoUrl }>
          <MdLaunch
          className={ styles.icon } 
          size={ iconSize }/>
        </a>
      </div>
    }

    if(codeUrl) {
      cURL = 
      <div className="round-btn green">
        <a href={ codeUrl }>
          <MdCode 
            className={ styles.icon } 
            size={ iconSize }/>
        </a>
      </div>
    }

    return (
      <div className={ styles.project }>
        <Col xs={12} md={8}>
          <img 
            className={ styles.imgLeft } 
            src={ imgUrl } 
            alt={ title }/>
        </Col>
        <Col xs={12} md={4} className={ styles.textContainer }>
          <h2><b> { title }</b></h2><div className="gradHead"/>
          <p> { desc }
          </p>
          <h3>Built with: </h3>
            { tools }
            { dURL }
            { cURL }
        </Col>
      </div>
    )
  }
}