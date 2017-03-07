import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"
import { Col } from "react-bootstrap/lib"


//import Button from "../../components/Button"
import Loading from "../../components/Loading"
import Banner from "../../components/Banner"
import defaultBannerImg from "./flatiron.jpg"

import styles from "./index.scss"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const bannerImg = head.bannerImg ? head.bannerImg : defaultBannerImg

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "description", content: head.description }
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      { header }
      <Banner 
        imgUrl={ bannerImg } 
        h1={ metaTitle } 
        h2={ head.description }/>
      <section>
        <Col xs={12} md={8} mdOffset={2}>
          <div className={ styles.body }>
            {
              isLoading
              ? <Loading />
              : <BodyContainer>{ body }</BodyContainer>
            }
          </div>
        { children }
      </Col>
      </section>
      { footer }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
