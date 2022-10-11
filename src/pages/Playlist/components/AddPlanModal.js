import { Modal,Button ,Form} from "react-bootstrap";
export function AddPlanModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Plan 추가
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>Plan 제목</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

    
        <Form.Group className="mb-3">
          <Form.Label>Plan 설명</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="내용을 입력하세요."
          />
        </Form.Group>
        
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }