import React from "react"
import Fade from "react-reveal/Fade"
import data from "../data"

const Footer = () => {
  return (
    <div className="section" id="footer">
      <div className="container footer-container">
        <div className="social-icon">
          <Fade bottom cascade delay={100} >
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="Social icon" />
              </a>
            ))}
          </Fade>
        </div>
        <Fade bottom cascade delay={100}>
          <div>
            <p>Zeynel Koca <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Footer
