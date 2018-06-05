import React, { Component, PropTypes } from "react";
import styles from "./index.scss";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { 
  FaGithubSquare, 
  FaFacebookSquare, 
  FaEnvelope } from "react-icons/lib/fa";

export default class Social extends Component {
  static propTypes = {
    size: PropTypes.number.isRequired
  };

  render() {
    const emailTooltip = (
      <Tooltip id="tooltip">Send me an email!</Tooltip>
    );
    const gitTooltip = (
      <Tooltip id="tooltip">See my code on Github!</Tooltip>
    );
    const fbTooltip = (
      <Tooltip id="tooltip">I never use this!</Tooltip>
    );

    const { size } = this.props;

    return (
      <div className={ styles.buttons }>
        <OverlayTrigger placement="top" overlay={emailTooltip}>
          <a href="mailto:kierwinski@gmail.com"
            className={ styles.link }>
            <FaEnvelope 
              className={ styles.icon } 
              size={ size }/>
          </a>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={gitTooltip}>
          <a href="https://github.com/Kierancz"
            className={ styles.link }
            target="_blank">
            <FaGithubSquare 
              className={ styles.icon } 
              size={ size }/>
          </a>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={fbTooltip}>
          <a href="https://www.facebook.com/kierancz"
            className={ styles.link }
            target="_blank">
            <FaFacebookSquare 
              className={ styles.icon } 
              size={ size }/>
          </a>
        </OverlayTrigger>
      </div>
    );
  }
}