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

    const react = {
      id: 1, 
      name: 'React',
      icon: 'assets/icons/react.svg',
      link: 'https://facebook.github.io/react/'
    };
    const materialize = {
      id: 2,
      name: 'Materialize',
      icon: '',
      link: 'http://materializecss.com/'
    };
    const bootstrap = {
      id: 3,
      name: 'Bootstrap',
      icon: '',
      link: ''
    };
    /*
    const sass = {
      id: 4,
      name: 'SASS',
      icon: '',
      link: ''
    };
    */
    const firebase = {
      id: 5,
      name: 'Firebase',
      icon: '',
      link: 'https://firebase.google.com/'
    };
    const overpassTurbo = {
      id: 6,
      name: 'Overpass Turbo',
      icon: '',
      link: 'https://overpass-turbo.eu/'
    };
    const webpack = {
      id: 7,
      name: 'Webpack',
      icon: '',
      link: 'https://webpack.github.io/'
    };
    const css3 = {
      id: 8,
      name: 'CSS3',
      icon: 'assets/icons/reactBoostrap.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
    };
    const leaflet = {
      id: 9,
      name: 'Leaflet',
      icon: '',
      link: 'http://leafletjs.com/'
    };
    const leather = {
      id: 10,
      name: 'Leather',
      icon: '',
      link: ''
    };
    const wool = {
      id: 11,
      name: '100% Merino Wool Felt',
      icon: '',
      link: ''
    };
    const elastic = {
      id: 12,
      name: 'Rubber-backed Elastic ',
      icon: '',
      link: ''
    };
    const mFiber = {
      id: 13,
      name: 'Toray Micro Fiber',
      icon: '',
      link: ''
    };
    const RoR = {
      id: 14,
      name: 'Ruby on Rails',
      icon: '',
      link: ''
    };
    const heroku = {
      id: 15,
      name: 'Heroku',
      icon: '',
      link: ''
    };
    const arduino = {
      id: 16,
      name: 'Arduino',
      icon: '',
      link: ''
    };
    const gyro = {
      id: 17,
      name: 'Accelerometer/Gyroscrope Module',
      icon: '',
      link: ''
    };
    const SDM = {
      id: 18,
      name: '3D Printing',
      icon: '',
      link: ''
    };
    const CAD = {
      id: 19,
      name: 'AutoCAD',
      icon: '',
      link: ''
    };


    let tools1=[]
    let tools2=[]
    let epokTools=[]
    let bsTools=[]
    let modGaitTools=[]

    tools1.push(react, materialize, firebase, css3)
    tools2.push(react, leaflet, overpassTurbo, webpack, materialize, css3)
    epokTools.push(wool, leather, elastic, mFiber)
    bsTools.push(RoR, bootstrap, heroku)
    modGaitTools.push(arduino, gyro, SDM, CAD)


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
              tools={ tools1 } />
            <Project 
              imgUrl="assets/projects/zayoFiber.gif"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. Our team recieved first 
              place at a Zayo sponsered hackathon for our itemized
              price break-downs including hazard data from the 
              overpass-turbo api."
              tools={ tools2 } />
            <Project 
              imgUrl="assets/projects/brailleTag.gif"
              title="Parametric Braille Tag"
              description="This was created entirely from code, using
              an awesome cloud-based 3D modelling tool created
              by my professor."
              tools={ tools1 } />
            <Project 
              imgUrl="assets/projects/mod.jpg"
              title="Wearable Power Modules and Parkinsons Gait Assistant"
              description="Inspired by my first smart phone,
              I learned how to sew and made a protective sleeve
              with expandable storage that can hang or clip to your
              belt or pocket so it stays consealed yet easily accessible."
              tools={ modGaitTools } />
            <Project 
              imgUrl="assets/projects/epokCol.jpg"
              title="Epok"
              description="Inspired by my first smart phone,
              I learned how to sew and made a protective sleeve
              with expandable storage that can hang or clip to your
              belt or pocket so it stays consealed yet easily accessible."
              tools={ epokTools } />
            <Project 
              imgUrl="assets/projects/blokkspace.gif"
              title="Blokkspace "
              description="This was my first real web app that 
              I designed a built from scratch. It allows you to create
              collaborative playlists composed of reusable blocks 
              of media (videos, pictures, music, text, etc).
              "
              tools={ bsTools } />
            </Row>

          </div>
        </section>

      </div>
    )
  }
}
