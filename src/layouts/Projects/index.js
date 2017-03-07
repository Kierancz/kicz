import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import Project from "../../components/Project"
import {Row} from "react-bootstrap/lib"
import styles from "./index.scss"

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

    /*const tools = [{
      id: 1, 
      name: 'react',
      icon: 'assets/icons/react.svg',
      link: 'https://facebook.github.io/react/'
    },{
      id: 2,
      name: 'materialize',
      icon: '',
      link: ''
    }]*/


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

            <Row>
            <Project 
              imgUrl="assets/projects/chatty.png"
              title="Chatty Cathy"
              description="A simple chatroom app build from scratch 
                with media attachments, admin view
                and, user profile."
              tools={['react']['materialize']} />
            <Project 
              imgUrl="assets/projects/zayoFiber.gif"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. Our team recieved first 
              place at a Zayo sponsered hackathon for our itemized
              price break-downs including hazard data from the 
              overpass-turbo api."
              tools={['react']['materialize']} />
            <Project 
              imgUrl="assets/projects/brailleTag.gif"
              title="Parametric Braille Tag"
              description="This was created entirely from code, using
              an awesome cloud-based 3D modelling tool created
              by my professor."
              tools={['react']['materialize']} />
            </Row>

          </div>
        </section>

      </div>
    )
  }
}
