import React from "react"
import { Fade } from "react-awesome-reveal"
import data from "../data"

const Footer = () => {
  return (
    <div className="section" id="footer">
      <div className="container footer-container">
        <div className="social-icon">
          <Fade triggerOnce direction="up" delay={100} >
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
        <Fade triggerOnce direction="up" cascade delay={100}>
          <div>
            <p>Zeynel Koca <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {new Date().getFullYear()}</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Footer
