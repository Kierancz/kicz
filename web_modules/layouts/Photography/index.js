import React, { Component } from "react"
import Helmet from "react-helmet"
import styles from "./index.css"

export default class PageLoading extends Component {

  render() {
    return (
      <div>
        <Helmet
          title={ "Photography" }
        />
      </div>
    )
  }
}
