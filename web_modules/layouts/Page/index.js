import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { BodyContainer, joinUri } from "phenomic"
import Banner from "../../components/Banner"
import styles from "./Page.scss"

import defaultBannerImg from "./flatiron.jpg"

class Page extends Component {
  render() {
    const { props } = this
    const {
      __filename,
      __url,
      head,
      body,
      header,
      footer,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const bannerImg = head.bannerImg ? head.bannerImg : defaultBannerImg

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

    return (
      <div>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />

        { header }
        <Banner imgUrl={ bannerImg } h1={ metaTitle } />
        <div className="row">
          <section>
            <div className={ styles.content }>
              <BodyContainer>{ body }</BodyContainer>
            </div>
          </section>
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
