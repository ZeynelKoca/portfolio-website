import React from "react"
import { Fade } from "react-awesome-reveal"
import ProjectCard from "./atoms/ProjectCard"

import data from "../data"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="projects-wrapper">
          <Fade triggerOnce direction="up" cascade>
            <h1>Projects</h1>
            <h2>Including some source code</h2>
          </Fade>

          <div className="grid">
            <Fade triggerOnce direction="up" delay={100}>
              {data.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  heading={project.title}
                  paragraphs={project.paragraphs}
                  tags={project.tags}
                  img={project.imageSrc}
                  showcase={project.showcase}
                  demo={project.demo}
                  source={project.source}
                />
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
