import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button,Dropdown } from "react-bootstrap";
import { AlertModal } from "../../components/AlertModal";
const PostWrapper = styled.div`
  margin-top: 120px;
  margin-left: 60px;
  margin-right:60px;
`;

const Index = () => {
  const [showmodal, setShowModal] = useState(false);

  return (
    <PostWrapper>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>목표 제목</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Dropdown className="mb-2">
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      카테고리
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item active>
        건강
      </Dropdown.Item>
      <Dropdown.Item >취미</Dropdown.Item>
      <Dropdown.Item >학습</Dropdown.Item>
      <Dropdown.Item >어학</Dropdown.Item>
      <Dropdown.Item >IT</Dropdown.Item>
      <Dropdown.Item >기타</Dropdown.Item>
      </Dropdown.Menu>
  </Dropdown>
        <Form.Group className="mb-3">
          <Form.Label>목표 설명</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="내용을 입력하세요."
          />
        </Form.Group>

      </Form>
      <Button
        variant="primary"
        type="submit"
        onClick={() => setShowModal(true)}
      >
        제출
      </Button>
      <AlertModal
        size="sm"
        show={showmodal}
        onHide={() => setShowModal(false)}
        text={"업로드 완료"}
      />
    </PostWrapper>
  );
};

export default Index;
