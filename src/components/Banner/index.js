import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
//import cx from "classnames"
import { TrackDocument, Track } from 'react-track'
import {tween} from 'react-imation';
import {topTop,
        getDocumentRect,
        getDocumentElement,
        calculateScrollY} from 'react-track/tracking-formulas';
import {rgba} from 'react-imation/tween-value-factories';

export default class Banner extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    h1: PropTypes.string,
    h2: PropTypes.string,
    para: PropTypes.string,
  };

  constructor(props) {
    super(props)
  }

  render() {
    const imgUrl = this.props.imgUrl

    const banner = {
      position: 'fixed',
      top: '0px',
      zIndex: '-1',
      minWidth: '100%',
      height: '400px',
      background: "url(" + imgUrl + ")no-repeat center center",
      objectFit: 'cover'

    }

    return (
      <TrackDocument 
        formulas={[getDocumentElement, getDocumentRect, calculateScrollY, 
          topTop]}>
        {(documentElement, documentRect, scrollY, topTop) =>
          <Track className={styles.fade} formulas={[topTop]}>
          {(Div, posTopTop) =>
            <Div>
              <img
                style={banner}
                src={this.props.imgUrl}
                alt="banner image"
              />
              <div
                className={styles.intro}
                style={tween(scrollY, [
                  [posTopTop, {backgroundColor: rgba(0, 0, 0, 0.4)}],
                  [posTopTop + 330, {backgroundColor: rgba(0, 0, 0, 1)}]
                  ])}>
                <h1>{ this.props.h1 }</h1>
                <h2>{ this.props.h2 }</h2>
                <p>{ this.props.para }</p>
              </div>
            </Div>
          }</Track>
      }</TrackDocument>
    )
  }
}
