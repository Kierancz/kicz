import React from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import AppContainer from "./AppContainer"
import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import Homepage from "./layouts/Homepage"
import Projects from "./layouts/Projects"
import Photography from "./layouts/Photography"
import Post from "./layouts/Post"
import Blog from "./layouts/Blog"
import About from "./layouts/About"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
      About,
      Blog,
      Projects,
      Photography,
      Post,
    }}
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="/" component={ Homepage } />
    <Route path="/about" component={ About } />
    <Route path="/projects" component={ Projects } />
    <Route path="/photos" component={ Photography } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
