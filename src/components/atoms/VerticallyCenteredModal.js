import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const VerticallyCenteredModal = (props) => {
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

export default VerticallyCenteredModal