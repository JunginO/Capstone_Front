import InputWithLabel from "./InputWithLabel";
import { useState } from "react";
import axios from "axios";
import { Modal,Button } from "react-bootstrap";
export function IdCheckModal(props) {
  const [id, setId] = useState("");
    const onChangeId = (e) => {
        setId(e.target.value);
      };
    const onClickSearch=async()=>{
        try{
            const result=await axios({
                method:"GET",
                url: `http://3.218.116.118:5000/api/user/idcheck/${id}`,
 
              });
              console.log(result)
              if (result.data.success==true) {
                alert(result.data.message);
                props.setId(id);
              } else {
                if (result.data.success === false) {
                  alert(result.data.message);
              }}
            } catch {
              console.log("error");
            }
          };
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            아이디 체크
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputWithLabel
          label="아이디"
          name="username"
          placeholder="아이디"
          type="text"
          value={id}
          onChange={onChangeId}
        />
        <button onClick={onClickSearch}>중복체크</button>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }