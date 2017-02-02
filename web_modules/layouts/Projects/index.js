import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import { Card, CardTitle } from "react-materialize/lib"

import chatty from "./chatty.png"

// const numberOfLatestPosts = 6

export default class Projects extends Component {
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

    const title = "Projects"
    const img = 
    "https://c2.staticflickr.com/6/5723/30769260225_f72ea92a51_k.jpg"

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
        <Banner imgUrl={ img } />
        <div className="container">
          <Card 
            className="card-image"
            header={
              <CardTitle image={ chatty }>Chatty Cathy
              </CardTitle>
            }
          >
            I am a very simple card. I am good at containing 
            small bits of information. I am convenient because 
            require little markup to use effectively.
          </Card>
        </div>

      </div>
    )
  }
}
