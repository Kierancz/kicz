import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import favicon from "./favicon-32x32.png"
import Adsense from '../Adsense';

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      link={ [
        { "rel": "icon",
          "type": "image/png", 
          "href": favicon,
          "lang": "en",
        },
      ] }
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
        { src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"},
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
    <Adsense/>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
