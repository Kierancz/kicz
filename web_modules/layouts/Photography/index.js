import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import styles from "./index.scss"

import bannerImg from "./camera.jpg"

export default class Projects extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    const title = "Projects"

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.projects },
    ]

    return (
      <div>
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Banner 
          imgUrl={ bannerImg } 
          h1="Photography" 
          h2="Light n' stuff"
        />
        <section>
          <div className={ styles.container }>
          </div>
        </section>

      </div>
    )
  }
}
