import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import { Card, CardTitle, Row, Col } from "react-materialize/lib"
import styles from "./index.scss"

import chatty from "./chatty.png"
import bannerImg from "./code.png"

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
          h1="Projects" 
          h2="A collection of selected creative works"
        />
        <section>
          <div className={ styles.container }>
            <Row>
              <Col s={ 4 }>
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
              </Col>
            </Row>
          </div>
        </section>

      </div>
    )
  }
}
