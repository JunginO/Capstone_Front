import { Modal } from "react-bootstrap";
export function AlertModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.text}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
}
