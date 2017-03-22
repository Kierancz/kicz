import React ,{ PropTypes }from "react"
import styles from "./index.scss"
import { FaGithubSquare, 
  FaFacebookSquare, FaLinkedinSquare, FaEnvelope} 
  from "react-icons/lib/fa"

const Social = (props) => (
  <div className={ styles.buttons }>
    <a href="mailto:kierwinski@gmail.com"
      className={ styles.link }>
      <FaEnvelope 
        className={ styles.icon } 
        size={ props.size }/>
    </a>
    <a href="https://www.linkedin.com/in/kieran-czerwinski-57558344/"
      className={ styles.link }>
      <FaLinkedinSquare 
        className={ styles.icon } 
        size={ props.size }/>
    </a>
    <a href="https://github.com/Kierancz"
      className={ styles.link }>
      <FaGithubSquare 
        className={ styles.icon } 
        size={ props.size }/>
    </a>
    <a href="https://www.facebook.com/kierancz"
      className={ styles.link }>
      <FaFacebookSquare 
        className={ styles.icon } 
        size={ props.size }/>
    </a>
  </div>
)
Social.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Social
