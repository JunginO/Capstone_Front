import React from "react";
import styled from "styled-components";
const Mainbox = styled.div`
  .comment-input {
    background-color: white;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid gray;
    width: 85%;
    line-height: 40px;
  }
  .comment-btn {
    height: 60px;
    width: 11%;
  }
`;

const PlaylistComment = ({ data }) => {
  return (
    <Mainbox>
      <div className="comment-box">
        <input type="text" placeholder="댓글달기" className="comment-input" />
        <button type="button" className="comment-btn">
          작성
        </button>
      </div>
    </Mainbox>
  );
};
export default PlaylistComment;
