import React from "react";
import styled from "styled-components";
import { Playlistlist } from "../../../components/dummyData";
import MypageContentBox from "./MylistContentBox";
const MainWrapper = styled.div`
  margin: 0px 100px;
  margin-top: 58px;
  background-color: white;
  .main-cate {
    margin: 10px;
    font-weight: bold;
    margin-left: 10px;
    border-bottom: 3px solid skyblue;
    padding: 2px;
  }
  .cate {
    margin: 10px;
    font-weight: bold;
    margin-left: 10px;
    padding: 2px;
  }
`;

const MypageList = () => {
  return (
    <MainWrapper>
      <div>
        <span className="main-cate">전체</span>
        <span className="cate">개발자 되기</span>
        <span className="cate">건강</span>
        <span className="cate">클래식</span>
      </div>
      {Playlistlist.map((data) => (
        <div>
          <MypageContentBox data={data} />
        </div>
      ))}
    </MainWrapper>
  );
};
export default MypageList;
