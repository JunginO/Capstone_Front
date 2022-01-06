import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  flex: 0 0 auto;
  img {
    width: 180px;
  }
`;
const ExploreBox = () => {
  return (
    <BoxWrapper>
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
    </BoxWrapper>
  );
};
export default ExploreBox;
