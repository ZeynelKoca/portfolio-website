import React from "react"
import { Fade } from "react-awesome-reveal"
import data from "../data"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="center-screen">
          <div className="about-section">
            <div className="content">
              <Fade triggerOnce direction="up" cascade delay={100}>
                <h1>About Me</h1>
              </Fade>
              <Fade triggerOnce direction="up" cascade delay={100}>
                <div>
                  <p>
                    <br></br>
                    {data.aboutParaOne}
                    <br></br>
                  </p>
                  <p>
                    {data.aboutParaTwo}
                    <br></br>
                  </p>
                  < p>
                  <br></br>
                    {data.aboutParaThree}
                    <br></br>
                  </p>
                  < p>
                    {data.aboutParaFour}
                    <br></br>
                  </p>
                </div>
              </Fade>
            </div>
            <Fade triggerOnce direction="right" cascade delay={100}>
              <div className="image-wrapper">
                <img src={data.aboutImage} alt="about" className="about-img" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
