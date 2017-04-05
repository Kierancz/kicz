import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import { Link } from "phenomic"
import Banner from "../../components/Banner"
import styles from "./index.scss"
import bannerImg from "./strawberryRock.jpg"
import me from "./me.jpg"
import Footer from "../../components/Footer"
import { 
  Row, 
  Col, 
  Tooltip, 
  OverlayTrigger } from "react-bootstrap"
import {  } from "react-bootstrap"
import { MdEmail, MdPhoneIphone } 
  from "react-icons/lib/md"


export default class About extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    const title = "About"
    const iconSize = 30

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.about },
    ]
    const emailTooltip = (
      <Tooltip id="tooltip">Shoot me an email!</Tooltip>
    )
    const phoneTooltip = (
      <Tooltip id="tooltip">+1 (707) 499 - 9913</Tooltip>
    )

    const email = (
      <OverlayTrigger placement="top" overlay={emailTooltip}>
        <div className="round-btn">
          <a href="mailto:kierwinski@gmail.com">
            <MdEmail
            className="icon" 
            size={ iconSize }/>
          </a>
        </div>
      </OverlayTrigger>
    )

    const phone = (
      <OverlayTrigger placement="top" overlay={phoneTooltip}>
        <div className="round-btn">
          <a href="tel:+17074999913">
            <MdPhoneIphone 
              className="icon"              
              size={ iconSize }/>
          </a>
        </div>
      </OverlayTrigger>
    )

    return (
      <div>
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Banner 
          imgUrl={ bannerImg } 
          h1={ title } 
          h2="The little things"
        />
        <div className={ styles.about }> 
          <Row>
            <Col xs={8} sm={4} lg={3} lgOffset={1}>
              <img 
                className={ styles.img } 
                src={ me } 
                alt="Kieran Czerwinski"
              />
            </Col>
            <Col xs={12} sm={8} lg={7}>
              <div className={ styles.para }>
              <div className='btn-toolbar pull-right'>
                <div className='btn-group'>
                  { email }{ phone }
                </div>
              </div>

              <h1>Kieran Czerwinski</h1>
              <div className="gradHead"/>
              <p>I’m a resourceful ape from the redwoods of northern California 
              that moved to Colorado to become less of a dummy. It might not have 
              worked, but now I have a bachelors degree in Computer Science and a 
              minor stick up my butt in Philosophy.
              </p>
              <p>
              I’ve always had a deep love for the process of building things. 
              It challenges my philosophies of design and allows me to practice 
              my favorite skills; creativity, empathy, and logic to solve problems 
              and prioritize concerns under 
              real-world constraints and tradeoffs. However, I believe true 
              wisdom comes not merely from building, but objectively evaluating 
              and learning from the resulting success and failures. It’s a 
              beautifully cyclical, humbling, and rewarding process that I 
              think is crucial not only to designing successful products, but 
              to life in general.
              </p>
              <p>
              I’ve been an Internet addict since the days of dialup. It allowed 
              me to discover and explore a wide range of passions, giving me 
              the hands on skills and confidence necessary to pursue an enduring 
              journey of creation and learning. It’s an amazing resource for the 
              collective wisdom of humanity and I think its vast potential to 
              reshape our lives makes it humanity’s greatest creation since 
              language itself. However, the web's potential is severely limited 
              by its accessibility to the general populace and all to often 
              leaves behind those who it could benefit most. As an ever growing web 
              developer and designer, I’m excited to play a small part in making 
              the web a more intuitive, accessible, and useful place for all the 
              diverse spiders of the world.
              </p>
              <p>
              In my free time I like to learn new skills, tinker with 3D modeling/printing, 
              blow up electronics, read a good book or article, and on the rare 
              occasion, I venture outside to hike, mountain bike, play tennis, 
              and sun my pasty skin.
              </p>
                <h3 className={ styles.work }>See some of my work: </h3><Link to="/projects.html" className="btn draw">
                  Projects
                </Link>
              </div>
            </Col>
          </Row>
          <Footer/>
        </div>
      </div>
    )
  }
}
