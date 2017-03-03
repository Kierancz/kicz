import React, { Component, PropTypes } from "react"
//import ReactDom from "react-dom"
import styles from "./index.scss"
//import cx from "classnames"
import PureRenderMixin from 'react-addons-pure-render-mixin'
//import { SparkScroll } from 'react-spark-scroll/lib/spark-scroll-gsap'
//import { ParallaxContainer, Parallax } from 'react-gsap-parallax'


export default class Banner extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    h1: PropTypes.string,
    h2: PropTypes.string,
    para: PropTypes.string,
    blur: PropTypes.number,
    /*children: React.PropTypes.node.isRequired,
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    scrollDistance: React.PropTypes.number.isRequired,
    scrolljack: React.PropTypes.bool,
    style: React.PropTypes.object
    */
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const imgUrl = this.props.imgUrl
    /*var doc = document.documentElement;
    var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
    var blur = scrollTop / 10
    console.log("blur: ", blur)
    */
    //var blur = this.props.blur
    const banner = {
      height: "400px",
      background: "url(" + imgUrl + ")no-repeat center center"
      //WebkitFilter: "blur(" px)",
      //filter: "blur(" + blur + "px)"
    }
    //console.log("gsap Parallax: ", Parallax)
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
