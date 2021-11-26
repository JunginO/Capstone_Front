import React from "react";
import styled from "styled-components";
const Mainbox = styled.div`
  .comment-box {
    background-color: white;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid gray;
  }
  .time {
    color: gray;
    font-size: 10px;
    font-weight: 400;
  }
`;

const PlaylistCommentBox = ({ data }) => {
  return (
    <Mainbox>
      <div className="comment-box">
        <span>{data.id}</span>
        <span className="time">{data.time}</span>
        <div>{data.content}</div>
      </div>
    </Mainbox>
  );
};
export default PlaylistCommentBox;
