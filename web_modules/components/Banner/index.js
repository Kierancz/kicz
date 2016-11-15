import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
// import flatiron from ""

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
      top: "0px",
      height: "600px",
      background: "url(" + imgUrl + ")no-repeat center center",
    }

    return (
      <div style={ banner }>
        <header className={ styles.header }>
          <div className={ styles.intro }>
            <h1>{ this.props.h1 }</h1>
            <h2>{ this.props.h2 }</h2>
            <p>{ this.props.para }</p>
          </div>
        </header>
      </div>
    )
  }
}
