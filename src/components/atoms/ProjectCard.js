import React, { useState } from "react"
import VerticallyCenteredModal from "./VerticallyCenteredModal"

const ProjectCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div 
      className="project-card" 
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(${props.img})`,
        backgroundSize: "cover",
      }}
    >
      <VerticallyCenteredModal
        heading={props.heading}
        paragraphs={props.paragraphs}
        showcase={props.showcase}
        source={props.source}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className="content" role="button" tabIndex={0} onClick={() => setModalShow(true)} onKeyDown={() => setModalShow(true)}>
        <h1 className="header">{props.heading}</h1>
        {props.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard