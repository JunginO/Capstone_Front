import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BoxWrapper = styled.div`
  img {
    width: 90%;
  }
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`;
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
const ExploreBox = () => {
  return (
    <BoxWrapper>
      <StyledLink to="/playlist">
        <div>
          <img
            src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg"
            alt="일단 고양이"
          />
          <div className="text-box">
            <div>토익 900달성</div>
            <div>김예원</div>
          </div>
        </div>
      </StyledLink>
    </BoxWrapper>
  );
};
export default ExploreBox;
