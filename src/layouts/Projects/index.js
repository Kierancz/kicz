import React, { Component, PropTypes } from "react";
import Helmet from "react-helmet";
import Banner from "../../components/Banner";
import Project from "../../components/Project";
import { Row } from "react-bootstrap/lib";
import styles from "./index.scss";
import Footer from "../../components/Footer";
import BackToTop from "../../components/BackToTop";

import bannerImg from "./code.jpg";

import {
  varTools,
  chatTools,
  zayoTools,
  epokTools,
  bsTools,
  modGaitTools,
  portTools,
  curTools,
  tagTools,
  nasaTools,
  nuthreadTools
} from './tools';

export default class Projects extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      pkg,
    } = this.context.metadata;

    const title = "Projects";

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.projects },
    ];

    return (
      <div>
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Banner
          imgUrl={ bannerImg }
          h1="Projects"
          h2="A collection of personal creative works"
        />
          <div className={ styles.projects }>
            <Row>
            <Project
              imgUrl="assets/projects/nu-thread.gif"
              imgStill="assets/projects/nu-thread.jpg"
              title="nu-thread (Developing)"
              description="A web app to help find only the highest quality used
              clothes that actually fit. Saving users time and money. Proceeds
              from eBay referrals go toward neutralizing the lifecyle carbon
              emissions of the clothing and eco-friendly investments. This project
              is under continuous development as a method for learning Redux
              state management and other advanced libraries."
              tools={ nuthreadTools }
              demoUrl="https://nu-thread.com"
              codeUrl="https://github.com/Kierancz/nu-thread" />
            <Project
              imgUrl="assets/projects/NasaTimeMachine.jpg"
              title="NASA Photo Time Machine"
              description="A Twitter bot that uses a custom algorithm to find and tweet interesting old photos
              from this day in NASA history and interacts with users.
              This project gave me more experience managing control flow
              in the asynchronous Node environment, data streams, working with Twitter APIs,
              date & file manipulation, event scheduling, and deploying code to AWS EC2 instances using SSH & FTP.
              Its popularity has been steadily growing with absolute zero promotion."
              tools={ nasaTools }
              demoUrl="https://twitter.com/NasaTimeMachine"
              codeUrl="https://github.com/Kierancz/nasa-bot" />
            <Project
              imgUrl="assets/projects/kicz.jpg"
              title="Portfolio and Blog"
              description="A personal site developed with React
              and Phenomic. It was created as a way to record
              some of my work as I grow through my projects. I
              hope that by documenting my success and failures
              it reinforces what I've learned and clarifies
              my thinking through writing. It taught me more about
              CSS and SVG animation, cross-browser compatibility, gradients, scaling, filters,
              image compression, SASS usage, Webpack congfiguration, and gave me
              more pracitce building React components and creating
              scroll effects using React. "
              tools={ portTools }
              demoUrl="http://kicz.me"
              codeUrl="https://github.com/Kierancz/kicz" />
            <Project
              imgUrl="assets/projects/zayoFiber.gif"
              imgStill="assets/projects/zayoFiber.jpg"
              title="Zayo Fiber Pricing"
              description="Provides price estimates for laying
              down new fiber optic connections. I led the front-end development in ReactJS,
              including parsing and filtering JSON from the OverpassTurbo API to create the itemized
              list of potential hazards to fiber construction. This
              stand-out feature was highly praised by the panel of Zayo
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
              imgStill="assets/projects/chatty.jpg"
              title="Chatty Cathy"
              description="A real-time single page chatroom app implemented
              with a state machine to switch between chat,
              admin, and user views. It features typing detection,
              media attachments, up/down voting, and more. It was made from scratch in just a couple weeks
              and I helped develop fullstack features including chatroom creation,
              automatic media attachments (YouTube, Vimeo, JPGs, etc), user profiles, user simulation features using Node, and
              I designed the general look and feel using CSS and material design."
              tools={ chatTools }
              codeUrl="https://github.com/Kierancz/book/tree/master/src/apps/together" />
            <Project
              imgUrl="assets/projects/brailleTag.gif"
              imgStill="assets/projects/brailleTag.jpg"
              title="Parametric Braille Tag"
              description="A customizable identification tag for
              the visually impaired. This quick project was created
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
              title="Wearable Computing and Parkinsons FOG Assistant"
              description="A wearable computing power system
              that snaps together magnetically. Power modules contain
              LiPo batteries and protection circuits, a charging module
              includes a LiPo charging and 5V 'boost' circuit to charge
              all chained modules from USB or power your
              phone, Arduino, sensors, etc. A mini breadboard module allows rapid
              prototyping of diverse wearable electronics.
              As a demo, my partner and I programmed an Arduino and
              gyroscope to detect a walking gait using a custom algorithm based
              on the YAW values from the gyro. This allowed us to detect
              the debilitating freeze of gait (FOG) moments that people with Parkinson disease
              often experience. On FOG detection a laser projects a
              line as a visual cue needed to substitute for the patient's impaired
              Basal Ganglia and its motor cueing function."
              tools={ modGaitTools }
              codeUrl="https://github.com/Kierancz/gait_project/blob/master/CSCI4830_Gait_Project/CSCI4830_Gait_Project.ino"
              demoUrl="https://www.instructables.com/id/Wearable-Power-and-Computing-Modules-to-Improve-Pa/" />
            <Project
              imgUrl="assets/projects/curesource.gif"
              imgStill="assets/projects/curesource.jpg"
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
              imgStill="assets/projects/blokkspace.jpg"
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
              title="E-pok"
              description="Inspired by my first smart phone,
              I learned how to sew and made a protective sleeve
              with expandable storage that can hang or clip to your
              belt or pocket so it stays consealed yet easily accessible.
              I embarked on this project with little knowledge of
              product design and through it I learned how crucial
              iterative processes, user testing, and simplicity are to
              the practice of successful design. "
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
              tools={ varTools } />
            </Row>

            <BackToTop/>
            <Footer/>
          </div>

      </div>
    )
  }
}
