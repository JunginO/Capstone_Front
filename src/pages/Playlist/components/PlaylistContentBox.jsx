import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const BoxWrapper = styled.div`
  span {
    display: block;
  }
`;
const PlaylistContentBox = ({ data }) => {
  return (
    <BoxWrapper>
      <Card className="mt-2">
        <Card.Header>{data.title}</Card.Header>
        <Card.Body>
          <span>{data.content}</span>
          <span>소요시간: {data.time} 분</span>
        </Card.Body>
      </Card>
    </BoxWrapper>
  );
};
export default PlaylistContentBox;
