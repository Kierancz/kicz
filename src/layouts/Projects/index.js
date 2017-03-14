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
    const CSS3 = {
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
    const IL = {
      id: 20,
      name: 'Adobe Illustrator',
      icon: '',
      link: ''
    }
    const PS = {
      id: 21, 
      name: 'Adobe Photoshop',
      icon: '',
      link: ''
    }
    const SASS = {
      id: 22,
      name: 'SASS',
      icon: '',
      link: 'http://sass-lang.com/'
    }
    const phenomic = {
      id: 23, 
      name: 'Phenomic',
      icon: '',
      link: 'https://phenomic.io/'
    }


    let chatTools=[]
    let zayoTools=[]
    let epokTools=[]
    let bsTools=[]
    let modGaitTools=[]
    let portTools=[]
    let curTools = []

    chatTools.push(react, materialize, firebase, heroku, CSS3)
    zayoTools.push(react, leaflet, overpassTurbo, webpack, materialize, CSS3)
    epokTools.push(wool, leather, elastic, mFiber, IL, PS)
    bsTools.push(RoR, bootstrap, heroku)
    modGaitTools.push(arduino, gyro, SDM, CAD)
    portTools.push(react, phenomic, bootstrap, SASS)
    curTools.push(RoR, bootstrap, heroku, CSS3)


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
              imgUrl="assets/projects/port.png"
              title="kicz.me Personal Portfolio and Blog"
              description="A personal site designed with react
              and phenomic. It was designed to showcase some of 
              my work as it evolves."
              tools={ portTools } />
            <Project 
              imgUrl="assets/projects/zayoFiber.gif"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. Our team recieved first 
              place at a Zayo sponsered hackathon for our itemized
              price break-downs including hazard data from the 
              overpass-turbo api."
              tools={ zayoTools } />
            <Project 
              imgUrl="assets/projects/chatty.png"
              title="Chatty Cathy"
              description="A simple chatroom app build from scratch 
                with media attachments, admin view
                and, user profile."
              tools={ chatTools } />
            <Project 
              imgUrl="assets/projects/brailleTag.gif"
              title="Parametric Braille Tag"
              description="This was created entirely from code, using
              an awesome cloud-based 3D modelling tool created
              by my professor."
              tools={ chatTools } />
            <Project 
              imgUrl="assets/projects/mod.jpg"
              title="Wearable Power Modules and Parkinsons Gait Assistant"
              description="For my physical computing course I taught myself
              autoCAD and designed this wearable computing power system
              that snaps together magnetically. Power modules contain
              LiPo batteries and protection circuits, a charging module
              includes a LiPo charging and 5v 'boost' circuit to charge 
              any modules in the chain or power your
              phone, arduino, sensors, etc. A mini breadboard module was also 
              created for rapidly prototyping wearable electronics. 
              Together with a partner, we programmed an arduino and
              gyroscope to "
              tools={ modGaitTools } />
            <Project 
              imgUrl="assets/projects/curesource.gif"
              title="CUresource "
              description="CUresource is a resource
              map for CU-Boulder students to easily and convieniently
              find course and department info, contacts, and helpful 
              content. You can save your current classes and departments
              as well as your favorite posts with helpful material. It 
              was created by me to satisfy the projects requirements
              of my technical communication and 
              design english course. It helped me solidfy my understanding
              of rails and gave me more experience with front end design
              and polymorphic controllers. The trouble was content had
              to be added manually. It really needed scripts to pull
              relevant information from official CU pages, but neither of
              my partners were technically able to help."
              tools={ curTools } />
            <Project 
              imgUrl="assets/projects/blokkspace.gif"
              title="Blokkspace "
              description="This was my first real web app that 
              I designed a built from scratch for my first software
              engineering course. It allows you to create
              collaborative playlists composed of reusable blocks 
              of media (videos, pictures, music, text, etc). It exposed
              me to a number of core web technologies.
              "
              tools={ bsTools } />
            <Project 
              imgUrl="assets/projects/epokCol.jpg"
              title="Epok"
              description="Inspired by my first smart phone,
              I learned how to sew and made a protective sleeve
              with expandable storage that can hang or clip to your
              belt or pocket so it stays consealed yet easily accessible.
              I embarked on this project with little knowledge of 
              product design and through it I learned how crucial
              iterative processes, user testing, and simplicity are to
              the practice of successful product design. "
              tools={ epokTools } />
            </Row>

          </div>
        </section>

      </div>
    )
  }
}
