import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
// import cx from "classnames"
export default class Banner extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    h1: PropTypes.string,
    h2: PropTypes.string,
    para: PropTypes.string,
  };

  render() {
    const imgUrl = this.props.imgUrl
    const banner = {
      height: "400px",
      background: "url(" + imgUrl + ")no-repeat center center",
    }

    /* const bannerClass = cx(styles.wrapper, {
      [styles.docked]: this.props.docked,
    })
    */

    return (
      <header className={ styles.header }>
        <div style={ banner }>
          <div className={ styles.intro }>
            <h1>{ this.props.h1 }</h1>
            <h2>{ this.props.h2 }</h2>
            <p>{ this.props.para }</p>
          </div>
        </div>
      </header>
    )
  }
}
