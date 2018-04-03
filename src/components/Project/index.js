import React, { Component, PropTypes } from "react"
import { Col } from "react-bootstrap/lib"
//import SVGInline from "react-svg-inline"
import { Tooltip, OverlayTrigger } from "react-bootstrap"
import styles from "./index.scss"
import GifPlayer from "react-gif-player"
import { MdCode, MdLaunch }
  from "react-icons/lib/md"


export default class Project extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imgStill: PropTypes.string,
    description: PropTypes.string,
    tools: PropTypes.array,
    demoUrl: PropTypes.string,
    codeUrl: PropTypes.string,
  };

  render() {
    const {imgUrl, title, description, demoUrl, codeUrl, imgStill} = this.props
    const iconSize = 30

    const demoTooltip = (
      <Tooltip id="tooltip">See it in action!</Tooltip>
    )
    const codeTooltip = (
      <Tooltip id="tooltip">See the code!</Tooltip>
    )

    const tools = this.props.tools.map((tool) =>
      <div key={ tool.id }>
        <a
          target="_blank"
          href={ tool.link }
          className="slide"
          alt={ "link to " + tool.name }>
          <img href={ tool.icon }/>
          { tool.name }
        </a>
      </div>
    );

    let dURL = demoUrl?
      <OverlayTrigger placement="top" overlay={demoTooltip}>
        <div className="round-btn">
          <a href={ demoUrl } target="_blank">
            <MdLaunch
            className="icon"
            size={ iconSize }/>
          </a>
        </div>
      </OverlayTrigger> : ''

    let cURL = codeUrl?
      <OverlayTrigger placement="top" overlay={codeTooltip}>
        <div className="round-btn">
          <a href={ codeUrl } target="_blank">
            <MdCode
              className="icon"
              size={ iconSize }/>
          </a>
        </div>
      </OverlayTrigger> : '';

    let img =
      imgStill?
        <GifPlayer gif={imgUrl} still={imgStill} className={ styles.imgLeft }/>
        :
        <img
          className={ styles.imgLeft }
          src={ imgUrl }
          alt={ title }/>;

    return (
      <div className={ styles.project }>
        <Col xs={12} md={8}>
          { img }
        </Col>
        <Col xs={12} md={4} className={ styles.textContainer }>
          <div className={ styles.title }>
            <div className='btn-toolbar pull-right'>
              <div className='btn-group'>
                { dURL }{ cURL }
              </div>
            </div>
             <h2>
               <b> { title }</b>
             </h2>
          </div>
          <div className="gradHead"/>
          <p>
            { description }
          </p>
          <h3>Built with: </h3>
            { tools }
        </Col>
      </div>
    )
  }
}
