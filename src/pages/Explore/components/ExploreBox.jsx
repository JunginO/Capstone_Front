import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ShowID from "../../../components/ShowID";
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const ExploreBox = ({ data }) => {
  return (
    <StyledLink to="/playlist">
      <Card>
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body>
          <Card.Text>
            <p className="mb-1"> {data.title}</p>
            <ShowID data={data} />
          </Card.Text>
        </Card.Body>
      </Card>
    </StyledLink>
  );
};
export default ExploreBox;
