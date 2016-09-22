import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

// Import global CSS before other components and their styles
import "../styles/global.styles"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const scripts = [
  ...process.env.NODE_ENV === "production" && [
    { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
  ],
]
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div>
        <Nav />
        <Helmet
          meta={ [
            {
              name: "generator", content: `${
              process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
            },
            { property: "og:site_name", content: pkg.name },
          ] }
          script={ scripts }
        />

        { this.props.children }
        <Footer />
      </div>
    )
  }
}
