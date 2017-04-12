import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import Project from "../../components/Project"
import {Row} from "react-bootstrap/lib"
import styles from "./index.scss"
import Footer from "../../components/Footer"
import ScrollToTop from "react-scroll-up"
import { MdArrowUpward } from "react-icons/lib/md"
import { Tooltip, OverlayTrigger } from "react-bootstrap"


import bannerImg from "./code.jpg"

// const numberOfLatestPosts = 6

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
    const sqlite = {
      id: 24, 
      name: 'SQLite',
      icon: '',
      link: 'https://www.sqlite.org/'
    }
    const javascript = {
      id: 25, 
      name: 'Javascript',
      icon: '',
      link: ''
    }
    const craftml = {
      id: 26, 
      name: 'Craft ML',
      icon: '',
      link: 'https://craftml.io/collections'
    }
    const html = {
      id: 27, 
      name: 'HTML5',
      icon: '',
      link: ''
    }
    const nodejs = {
      id: 28,
      name: 'NodeJS',
      icon: '',
      link: 'https://nodejs.org/'
    }
    const topTooltip = (
      <Tooltip id="tooltip">Back to top</Tooltip>
    )

    let chatTools=[]
    let zayoTools=[]
    let epokTools=[]
    let bsTools=[]
    let modGaitTools=[]
    let portTools=[]
    let curTools = []
    let tagTools = []

    chatTools.push(react, firebase, nodejs, heroku, materialize, CSS3)
    zayoTools.push(react, leaflet, overpassTurbo, webpack, materialize, CSS3)
    epokTools.push(wool, leather, elastic, mFiber, IL, PS)
    bsTools.push(RoR, html, bootstrap, heroku, sqlite)
    modGaitTools.push(arduino, gyro, SDM, CAD)
    portTools.push(react, phenomic, SASS, bootstrap, webpack)
    curTools.push(RoR, bootstrap, heroku, sqlite, html, CSS3)
    tagTools.push(craftml, javascript)


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
          <div className={ styles.projects }>

            <Row>
            <Project 
              imgUrl="assets/projects/kicz.jpg"
              title="Personal Portfolio and Blog"
              description="A personal site designed with React
              and Phenomic. It was created as a way to record 
              some of my work as I grow through my projects. I 
              hope that by documenting my sucesses and failures
              it reinforces what I've learned and clarifies
              my thinking through writing. It taught me a lot about
              CSS and SVG animation, image compression, SASS usage, and gave me 
              more pracitce writing React components and creating 
              scroll effects using React. "
              tools={ portTools } 
              demoUrl="http://kicz.me"
              codeUrl="https://github.com/Kierancz/kicz" />
            <Project 
              imgUrl="assets/projects/zayoFiber.gif"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. I parsed and filtered the JSON
              blob returned from our AJAX call to the OverpassTurbo API to create the itemized 
              list of potential hazards to fiber construction. This was the
              stand-out feature that was highly praised by the panel of Zayo
              judges and resulted in our three person team winning first place out of nine teams. 
              I used philosophies from UCD to guide the overall visual design using CSS, regular expressions,
              and the responsive feedback during loading states and map interaction."
              tools={ zayoTools }
              codeUrl="https://github.com/Kierancz/fiber"
              demoUrl="http://kierancz.github.io/fiber/" />
            <Project 
              imgUrl="assets/projects/chatty.png"
              title="Chatty Cathy"
              description="A simple single page chatroom app implemented 
              with a state machine to switch between chat,
              admin, and user views. It features typing detection, 
              media attachments, up/down voting, and more. I helped develop 
              both front and back-end features including chatroom creation, 
              media attachments, user profiles, user simulation features, and
              I also designed the general look and feel using CSS and Material-UI."
              tools={ chatTools }
              codeUrl="https://github.com/Kierancz/book/tree/master/src/apps/together" />
            <Project 
              imgUrl="assets/projects/brailleTag.gif"
              title="Parametric Braille Tag"
              description="A customizable identification tag for 
              the visually impaired. This simple project was created
              with an awesome 3D modelling tool created
              by my professor that lets you build 3D models with HTML,
              CSS, and javascript. It's a great tool for those who
              already know web development and want to quickly create
              customizable 3D models which will be the future of
              3D printing. "
              tools={ tagTools }
              demoUrl="https://craftml.io/i7PNJ" />
            <Project 
              imgUrl="assets/projects/mod.jpg"
              title="Wearable Power Modules and Parkinsons FOG Assistant"
              description="I taught myself AutoCAD and designed this wearable computing power system
              that snaps together magnetically. Power modules contain
              LiPo batteries and protection circuits, a charging module
              includes a LiPo charging and 5V 'boost' circuit to charge 
              any modules in the chain from USB or power your
              phone, Arduino, sensors, etc. A mini breadboard module was also 
              created for rapidly prototyping wearable electronics of all sorts. 
              As a demo, my partner and I programmed an Arduino and
              gyroscope to detect a walking gait using a custom algorithm based
              on the YAW values from the gyro. This allowed us to detect
              the debilitating freeze of gait (FOG) moments that people with Parkinson disease
              often experience. Once these moments were detected we fired a laser
              line as a visual cue needed to substitute for the patient's impaired
              Basal Ganglia and its motor cueing function.
"
              tools={ modGaitTools }
              codeUrl="https://github.com/Kierancz/gait_project/blob/master/CSCI4830_Gait_Project/CSCI4830_Gait_Project.ino"
              demoUrl="https://www.instructables.com/id/Wearable-Power-and-Computing-Modules-to-Improve-Pa/" />
            <Project 
              imgUrl="assets/projects/curesource.gif"
              title="CUresource "
              description="CUresource is a resource
              map for CU-Boulder students to easily and convieniently
              find course and department info, contacts, and helpful 
              content. You can save your current classes and departments
              as well as your favorite posts with helpful material. I
              created it to satisfy the projects requirements
              of my technical communication and 
              design writing course. It helped me solidfy my understanding
              of Rails and gave me more experience with front-end design
              and polymorphic controllers. The trouble was content had
              to be added manually. It really needed scripts to pull
              relevant information from official CU pages, but neither of
              my partners were technically able to help."
              tools={ curTools }
              demoUrl="http://curesource.herokuapp.com/"
              codeUrl="https://github.com/Kierancz/CUresource" />
            <Project 
              imgUrl="assets/projects/blokkspace.gif"
              title="Blokkspace"
              description="This was my first real web app that 
              I designed a built from scratch using test driven development
              for my software engineering course. It allows you to create
              collaborative playlists composed of reusable blocks 
              of media (videos, pictures, music, text, etc). It exposed
              me to a number of core web technologies and best practices."
              tools={ bsTools }
              demoUrl="https://blokkspace.herokuapp.com/"
              codeUrl="https://github.com/Kierancz/block_space" />
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

            <ScrollToTop showUnder={160}>
              <OverlayTrigger placement="top" overlay={topTooltip}>
                <MdArrowUpward className="icon" size={60}/>
              </OverlayTrigger>
            </ScrollToTop>
            <Footer/>
          </div>

      </div>
    )
  }
}
