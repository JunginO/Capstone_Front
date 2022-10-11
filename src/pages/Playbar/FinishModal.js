import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Modal,Button,Form,Dropdown } from "react-bootstrap";

import images from "../../assets/images.png";
const Wrapper=styled.div`
.iimg-box {
    width: 20px;
    height: 2px;
    float: left;
    border-radius: 4px;
  }
  .goal-title{

  }
  .plan-title{
font-weight:600;
  }
`
export function FinishModal(props) {
    return (
    <Wrapper>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

          <p className="m-1" style={{fontWeight:"bold"}}>캡스톤 디자인 프로젝트</p>
          <p className="m-1" >발표자료 완성하기</p>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3">
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
      </Wrapper>
    );
  }
  