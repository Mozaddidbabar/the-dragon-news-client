import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Terms.css";

function Terms(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter terms-box rounded my-5 mx-auto"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter fw-bold text-center">
          Terms and Conditions Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, qui.
          </li>
          <li>
            Debitis quas harum nobis adipisci vitae dignissimos architecto
            voluptatum cumque.
          </li>
          <li>
            Nesciunt molestiae, fugit quidem tempora vel id praesentium sunt
            rem!
          </li>
          <li>
            Possimus adipisci eum repellat quo illo sequi voluptatum aut quas.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Okay</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Terms;
