import React, { PropTypes } from "react"

//import "./index.global.css"
import "./styles/monokai-sublime.global.css"
import "./styles/global.styles"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Content from "./components/Content"

import Nav from "./components/Nav"

import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"

const AppContainer = (props) => (
  <GoogleAnalyticsTracker params={ props.params }>
    <Container>
      <Nav/>
      <DefaultHeadMeta />
      <Content>
        { props.children }
      </Content>
    </Container>
  </GoogleAnalyticsTracker>
)

AppContainer.propTypes = {
  children: PropTypes.node,
  params: PropTypes.object
}

export default AppContainer
