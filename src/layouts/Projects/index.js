import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import { Col, Row, Grid, Button } from "react-bootstrap/lib"
import styles from "./index.scss"

import chatty from "./chatty.png"
import fiber from "./zayoFiber.gif"
import braille from "./brailleTag.gif"
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
          <div className={ styles.projects }>

            <Grid>
            <Row>
            <Col xs={12} md={8}>
              <img 
                className={ styles.imgLeft } 
                src={ chatty } 
                alt="242x200"/>
            </Col>
            <Col xs={12} md={4} className={ styles.textContainer }>
              <h2><b>Chatty Cathy</b></h2>
              <p>Simple chatroom app build from scratch 
                with media attachments, admin view
                and, user profile.
              </p>
            </Col>
            <Col xs={12} md={8}>
              <img 
                className={ styles.imgLeft } 
                src={ fiber } 
                alt="242x200"/>
            </Col>
            <Col xs={12} md={4} className={ styles.textContainer }>
              <h2><b>Zayo Fiber Pricing</b></h2>
              <p>Provides price estimates for laying
              down new fiber optic connections. Our team recieved first 
              place at a Zayo sponsered hackathon for our itemized
              price break-downs including hazard data from the 
              overpass-turbo api.</p>
            </Col>
            <Col xs={12} md={8}>
              <img 
                className={ styles.imgLeft } 
                src={ braille } 
                alt="242x200"/>
            </Col>
            <Col xs={12} md={4} className={ styles.textContainer }>
              <h2><b>Parametric Braille Tag</b></h2>
              <p>This was created entirely from code, using
              an awesome cloud-based 3D modelling tool created
              by my professor.</p>
              <p>
                <Button bsStyle="primary">Launch</Button>&nbsp;
                <Button bsStyle="default">Button</Button>
              </p>
            </Col>
            </Row>
            </Grid>

          </div>
        </section>

      </div>
    )
  }
}
