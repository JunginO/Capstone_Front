import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { AlertModal } from "../../components/AlertModal";
const PostWrapper = styled.div`
  margin-top: 60px;
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
        <Form.Group className="mb-3">
          <Form.Label>목표 설명</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="내용을 입력하세요."
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>이미지 업로드</Form.Label>
          <Form.Control type="file" />
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
