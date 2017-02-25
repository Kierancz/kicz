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

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={{
      Page,
      PageError,
      Homepage,
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
    <Route path="/projects.html" component={ Projects } />
    <Route path="/photos.html" component={ Photography } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
