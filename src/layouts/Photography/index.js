import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import Banner from "../../components/Banner"
import styles from "./index.scss"
import Gallery from "react-grid-gallery"
import images from "../../../content/assets/photos.js"
import bannerImg from "./camera.jpg"
import Footer from "../../components/Footer"
import ScrollToTop from "react-scroll-up"
import { MdArrowUpward } from "react-icons/lib/md"
import { Tooltip, OverlayTrigger } from "react-bootstrap"

export default class Photography extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
    metadata: PropTypes.object.isRequired,
  }

  render() {
    const {
      pkg,
    } = this.context.metadata

    const title = "Photography"

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.photography },
    ]
    const topTooltip = (
      <Tooltip id="tooltip">Back to top</Tooltip>
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
          h2="Phenominal Photons"
        />
          <div className={ styles.gallery }>
            <Gallery 
              images={ images } 
              enableImageSelection={ false }
              backdropClosesModal
              rowHeight={ 400 }
              lightboxWidth={ 1536 }
              className={ styles.gallery }
            />
            <OverlayTrigger placement="top" overlay={topTooltip}>
              <div className="round-btn">
                <ScrollToTop showUnder={160}>
                  <MdArrowUpward className="icon" size={60}/>
                </ScrollToTop>
              </div>
            </OverlayTrigger>
          </div>
          <br/>
          <Footer/>
      </div>
    )
  }
}
