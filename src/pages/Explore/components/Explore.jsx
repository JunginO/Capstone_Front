import React from "react";
import styled from "styled-components";
import ExploreBox from "./ExploreBox";
const MainWrapper = styled.div`
  .scroll-box {
    /* display: flex;
    overflow-y: scroll;
    flex-direction: row; */
    /* -ms-overflow-style: none; 
    scrollbar-width: none;  */
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

  }
  /* .scroll-box::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  } */
`;
const Explore = () => {
  return (
    <MainWrapper>
      <div>explore</div>
      <div className="playlist">
        <p>인기 플레이리스트</p>
        <div className="scroll-box">
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
          <ExploreBox />
        </div>
      </div>
      <div className="playlist">
        <p>관심주제:개발</p>
        <div>플레이리스트박스들</div>
      </div>
      <div className="playlist">
        <p>관심주제:음악</p>
        <div>플레이리스트박스들</div>
      </div>
    </MainWrapper>
  );
};
export default Explore;
