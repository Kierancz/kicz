import React, { Component, PropTypes } from "react"
// import enhanceCollection from "phenomic/lib/enhance-collection"

import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import Project from "../../components/Project"
import {Row} from "react-bootstrap/lib"
import styles from "./index.scss"
import Footer from "../../components/Footer"
import BackToTop from "../../components/BackToTop"

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
      name: 'ReactJS',
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
      name: 'Full-Grain Leather',
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
      name: 'JavaScript',
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
    const various = {
      id: 29,
      name: 'Various'
    }
    const aws = {
      id: 30,
      name: 'AWS EC2',
      icon: '',
      link: 'https://aws.amazon.com/ec2/'
    }
    const nasa = {
      id: 31,
      name: 'NASA Image & Video Library',
      icon: '',
      link: 'https://images.nasa.gov/#/'
    }
    const twit = {
      id: 32,
      name: 'Twit',
      icon: '',
      link: 'https://github.com/ttezel/twit'
    }
    const jquery = {
      id: 33,
      name: 'jQuery',
      icon: '',
      link: 'https://jquery.com/'
    }

    let chatTools=[]
    let zayoTools=[]
    let epokTools=[]
    let bsTools=[]
    let modGaitTools=[]
    let portTools=[]
    let curTools = []
    let tagTools = []
    let nasaTools = []

    chatTools.push(react, firebase, nodejs, heroku, materialize, CSS3)
    zayoTools.push(react, leaflet, overpassTurbo, webpack, materialize, CSS3, PS)
    epokTools.push(wool, leather, elastic, mFiber, IL, PS)
    bsTools.push(RoR, html, bootstrap, heroku, sqlite, CSS3, jquery)
    modGaitTools.push(arduino, gyro, SDM, CAD)
    portTools.push(react, phenomic, SASS, bootstrap, webpack, IL)
    curTools.push(RoR, bootstrap, heroku, sqlite, html, CSS3)
    tagTools.push(craftml, javascript)
    nasaTools.push(nodejs, twit, nasa, aws, PS)


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
              imgUrl="assets/projects/NasaTimeMachine.jpg"
              title="NASA Photo Time Machine"
              description="A Twitter bot that uses a custom algorithm to find and tweet interesting old photos
              from this day in NASA history and interacts with users. 
              This project gave me more experience consuming data from APIs, managing control flow
              in the asynchronous Node environment, data streams, working with Twitter APIs,
              date & file manipulation, event scheduling, and deploying code to AWS EC2 instances using SSH & FTP.
              Its popularity has been steadily growing with absolute zero promotion."
              tools={ nasaTools } 
              demoUrl="https://twitter.com/NasaTimeMachine"
              codeUrl="https://github.com/Kierancz/nasa-bot" />
            <Project 
              imgUrl="assets/projects/kicz.gif"
              title="Personal Portfolio and Blog"
              description="A personal site developed with React
              and Phenomic. It was created as a way to record 
              some of my work as I grow through my projects. I 
              hope that by documenting my success and failure
              it reinforces what I've learned and clarifies
              my thinking through writing. It taught me a lot about
              CSS and SVG animation, cross-browser compatibility, gradients, scaling, filters, 
              image compression, SASS usage, Webpack congfiguration, and gave me 
              more pracitce building React components and creating 
              scroll effects using React. "
              tools={ portTools } 
              demoUrl="http://kicz.me"
              codeUrl="https://github.com/Kierancz/kicz" />
            <Project 
              imgUrl="assets/projects/zayoFiber.gif"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. I led the front-end development in ReactJS, 
              including parsing and filtering the JSON
              blob returned from an AJAX call to the OverpassTurbo API to create the itemized 
              list of potential hazards to fiber construction. This was the
              stand-out feature that was highly praised by the panel of Zayo
              judges and resulted in our three person team winning first place out of nine teams. 
              I used philosophies from UCD to guide the overall visual design using CSS, regular expressions,
              and used knowledge of asynchronous JavaScript & map APIs to ensure the responsive 
              feedback during loading states and map interaction. I also refactored back-end code to 
              improve readability and efficiency. "
              tools={ zayoTools }
              codeUrl="https://github.com/Kierancz/fiber"
              demoUrl="http://kierancz.github.io/fiber/" />
            <Project 
              imgUrl="assets/projects/chatty.gif"
              title="Chatty Cathy"
              description="A real-time single page chatroom app implemented 
              with a state machine to switch between chat,
              admin, and user views. It features typing detection, 
              media attachments, up/down voting, and more. It was made from scratch in just a couple weeks 
              and I helped develop both front and back-end features including chatroom creation, 
              automatic media attachments (YouTube, Vimeo, JPGs, etc), user profiles, user simulation features using Node, and
              I designed the general look and feel using CSS and material design."
              tools={ chatTools }
              codeUrl="https://github.com/Kierancz/book/tree/master/src/apps/together" />
            <Project 
              imgUrl="assets/projects/brailleTag.gif"
              title="Parametric Braille Tag"
              description="A customizable identification tag for 
              the visually impaired. This simple project was created
              with an awesome 3D modelling tool created
              by my professor that lets you build 3D models with HTML,
              CSS, and JavaScript. It's a great tool for those who
              already know web development and want to quickly create
              customizable 3D models which will be the future of
              3D printing. "
              tools={ tagTools }
              demoUrl="https://craftml.io/i7PNJ" />
            <Project 
              imgUrl="assets/projects/mod.jpg"
              title="Wearable Power Modules and Parkinsons FOG Assistant"
              description="For my physical computing course I taught myself
               AutoCAD and designed this wearable computing power system
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
              Basal Ganglia and its motor cueing function."
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
              created it from scratch to satisfy the project requirements
              of my Technical Communication and 
              Design writing course. It helped me solidfy my understanding
              of Rails and gave me more experience with front-end design
              and polymorphic controllers as well as producing concise and 
              clear documentation of the design features and areas for future 
              improvement."
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
              of media (videos, pictures, music, text, etc). It helped me learn a
              number of core web technologies and best practices such as;
              MVC architecture, forms & validation, unit & integration testing, SQL database
              construction & migrations, feature tracking, event handling, jQuery, 
              user authentication & permissions, HTTP methods & routing, and many others."
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
            <Project 
              imgUrl="assets/projects/randProj.jpg"
              title="Various Projects"
              description="These are a small sample of the projects that
              were too unpolished, old, or unprofessional
              to have their own descriptions. They include simple games,
              scientific simulations, prototype apps, websites, electronics, woodworking,
              mockups, and wireframes. They were instrumental steps in developing
              my philosophies of design and I learned valuable skills from all of them."
              tools={ [various] } />
            </Row>

            <BackToTop/>
            <Footer/>
          </div>

      </div>
    )
  }
}
