import React from "react";
import styled from "styled-components";
import { playlist } from "../../../components/dummyData";
import MypageContentBox from "./MylistContentBox";
const MainWrapper = styled.div`
  margin: 0px 100px;

  background-color: white;
  .cate {
    margin: 10px;
    font-weight: bold;
    border-bottom: 1px solid skyblue;
  }
`;

const MypageList = () => {
  return (
    <MainWrapper>
      <div>
        <span className="cate">내 계획</span>
      </div>
      {playlist.map((data) => (
        <div>
          <MypageContentBox data={data} />
        </div>
      ))}
    </MainWrapper>
  );
};
export default MypageList;
