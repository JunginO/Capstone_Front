import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  .content-box {
    border: 1px solid skyblue;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
  .title {
    font-weight: bold;
    border-bottom: 1px solid skyblue;
    margin-left: 3px;
    padding-bottom: 5px;
    margin-bottom: 5px;
  }
  .tag-box {
    margin-top: 5px;
    height: 25px;
  }
  span {
    color: gray;
  }
  .content {
    margin: 3px;
  }
`;
const MypageContentBox = ({ data }) => {
  return (
    <BoxWrapper>
      <div className="content-box">
        <div className="main-box">
          <div className="title">{data.title}</div>
          <div className="content">
            <span>이전: </span>
            {data.first}
          </div>
          <div className="content">
            <span>이후: </span> {data.second}
          </div>
        </div>
      </div>
    </BoxWrapper>
  );
};
export default MypageContentBox;
