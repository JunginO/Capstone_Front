import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  .plan-box {
    border-radius: 1em;
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background-color: white;
  }
  .plan-box-title {
    display: inline-block;
    border-right: 1px solid gray;
    padding: 10px;
  }
  .plan-box-content {
    padding: 10px;
  }
  span {
    display: block;
  }
`;
const PlaylistContentBox = ({ data }) => {
  return (
    <BoxWrapper>
      <div className="plan-box">
        <div className="plan-box-title">{data.title}</div>
        <div className="plan-box-content">
          <span>{data.content}</span>
          <span>{data.time}</span>
        </div>
      </div>
    </BoxWrapper>
  );
};
export default PlaylistContentBox;
