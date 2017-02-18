import React, { Component } from "react"
import { Route } from "react-router"

import LayoutContainer from "../LayoutContainer"
import PhenomicPageContainer from "phenomic/lib/PageContainer"

import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import HomePage from "../layouts/HomePage"
import Projects from "../layouts/Projects"
import Photography from "../layouts/Photography"
import Post from "../layouts/Post"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={ {
          Page,
          PageError,
          PageLoading,
          HomePage,
          Projects,
          Photography,
          Post,
        } }
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="/" component={ HomePage } />
    <Route path="/projects.html" component={ Projects } />
    <Route path="/photos.html" component={ Photography } />
    <Route path="*" component={ PageContainer } />
  </Route>
)
