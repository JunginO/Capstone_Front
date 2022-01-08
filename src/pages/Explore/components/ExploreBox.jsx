import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BoxWrapper = styled.div`
  flex: 0 0 auto;
  img {
    width: 180px;
  }
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`;
const ExploreBox = () => {
  return (
    <BoxWrapper>
      <Link to="/playlist">
        <div>
          <img
            src="https://cdn.hellodd.com/news/photo/202005/71835_craw1.jpg"
            alt="일단 고양이"
          />
          <div>
            <div>토익 900달성</div>
            <div>김예원</div>
          </div>
        </div>
      </Link>
    </BoxWrapper>
  );
};
export default ExploreBox;
