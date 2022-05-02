import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { exploreDummy } from "../../components/dummyData";
import Goal from "../UserDetail/components/Goal";
export function OffCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Plans</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {exploreDummy.map((data) => (
            <div>
              <Goal data={data} />
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
