import React from "react";
import styled from "styled-components";
import TagButton from "../../../components/TagButton";
const MidWrapper = styled.div`
  .mid-box {
    border-bottom: 1px solid lightblue;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  span {
    font-size: 10px;
    margin-right: 5px;
  }
  .tag-box {
    padding-top: 10px;
  }
  .content {
    margin: 3px 0px;
  }
`;

const PlaylistMid = ({ data }) => {
  return (
    <MidWrapper>
      <div className="mid-box">
        <div className="content">{data.content}</div>
        <span>시작날짜:{data.startDate}</span>
        <div className="tag-box">
          <TagButton data={data.tag} />
          <TagButton data={data.tag} />
        </div>
      </div>
    </MidWrapper>
  );
};
export default PlaylistMid;
