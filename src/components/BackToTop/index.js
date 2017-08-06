import React, { Component } from "react"
import ScrollToTop from "react-scroll-up"
import { MdArrowUpward } from "react-icons/lib/md"
import { Tooltip, OverlayTrigger } from "react-bootstrap"

export default class BackToTop extends Component {

  render() {
    const topTooltip = (
      <Tooltip id="tooltip">Back to top</Tooltip>
    )

    return (
      <ScrollToTop showUnder={300}>
        <OverlayTrigger placement="top" overlay={topTooltip}>
          <MdArrowUpward className="icon" size={60}/>
        </OverlayTrigger>
      </ScrollToTop>
    )
  }
}
