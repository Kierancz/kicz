import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
// import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import Banner from "../../components/Banner"
import styles from "./Page.scss"

class Page extends Component {
  render() {
    const { props } = this
    const {
      // __filename,
      __url,
      head,
      body,
      header,
      footer,
    } = props

    /* invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )
    */

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { name: "description", content: head.description },
    ]

    const img="https://c2.staticflickr.com/6/5723/30769260225_f72ea92a51_k.jpg"
    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />

        { header }
        <Banner imgUrl={ img } />
        <div className="row">
          <div className={ styles.mainCol }>
            <div className={ styles.content }>
              <BodyContainer>{ body }</BodyContainer>
            </div>
          </div>
        </div>
        { props.children }
        { footer }
      </div>
    )
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
