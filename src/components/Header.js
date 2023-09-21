import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"
import scrollTo from "gatsby-plugin-smoothscroll"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="center-screen">
          <div className="header-wrapper">
            <Fade bottom>
              <h2>
                Hi, I'm {data.name}{" "}
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h2>
            </Fade>
            <Fade bottom cascade>
              <div className="heading-wrapper">
                <h1>
                  {data.headerTagline[0]}
                </h1>
                <h1>
                  {data.headerTagline[1]}
                </h1>
              </div>
            </Fade>
            <Fade bottom>
              <p>{data.headerParagraph}</p>
            </Fade>
            <Fade bottom>
              <button className="button-about" onClick={() => scrollTo("#about")}>
                About Me <FontAwesomeIcon icon={ faArrowDown } className="arrow bounce" style={{color: "#ededed"}} />
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
