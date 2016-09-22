import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Header from "./Header"

// const numberOfLatestPosts = 6

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }

  render() {
    /*
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { layout: "Post" },
      sort: "date",
      reverse: true,
    })
    .slice(0, numberOfLatestPosts)
    */
    const {
      pkg,
    } = this.context.metadata

    const title = "Home"

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.homepage },
      { property: "og:description", 
        content: "Personal Site for Kieran Czerwinski" },
      { name: "description", 
        content: "Personal Site for Kieran Czerwinski" },
    ]

    return (
      <div>
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Header />
      </div>
    )
  }
}
