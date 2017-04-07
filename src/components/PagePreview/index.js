import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.scss"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.title }>
      <Link to={ __url } className="slide">
        { title }
      </Link>
      </div>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className="btn btn-sm draw">
        <Button secondary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
}

export default PagePreview
