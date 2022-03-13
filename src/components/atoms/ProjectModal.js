import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby";

const GetDemoButton = (props) => {
  if (props.demo.charAt(0) != "/"){
    return <Button onClick={props.onHide} variant="success" href={props.demo} target={"_blank"}>Demo</Button>
  }

  return <Link to={props.demo} onClick={props.onHide} className="btn btn-success">Demo</Link>
}

const ProjectModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="transparent-background"
      >
        <div className="custom-modal">
        <Modal.Header closeButton closeVariant="white" >
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.showcase} alt="Project" className="project-showcase" />
          {props.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          {
            props.demo 
            ? GetDemoButton(props)
            : <Button onClick={props.onHide} variant="success" disabled>Demo</Button>
          }
          {
            props.source 
            ? <Button onClick={props.onHide} variant="success" href={props.source} target="_blank">Source code</Button>
            : <Button onClick={props.onHide} variant="success" disabled>Source code</Button>
          }
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </div>
      </Modal>
    );
}

export default ProjectModal