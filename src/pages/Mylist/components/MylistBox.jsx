import React from "react";
import styled from "styled-components";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const MylistBox = ({ data }) => {
  return (
    <Link to="/playlist" style={{ textDecoration: "none" }}>
      <Card>
        <Card.Header>{data.title}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item> 이전: {data.first}</ListGroup.Item>
          <ListGroup.Item>이후: {data.second}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );
};
export default MylistBox;
