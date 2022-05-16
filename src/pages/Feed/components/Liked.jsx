import React, { useState, useEffect } from "react";
import styled from "styled-components";
import wheart from "../../../assets/whiteheart.png";
import bheart from "../../../assets/blackheart.png";

const LikedWrapper = styled.div`
  display: inline-block;
  img {
    width: 15px;
    margin-right: 5px;
    margin-left: 5px;
  }
`;
const Liked = ({ liked, numliked, onClick }) => {
  return (
    <LikedWrapper>
      <img src={liked ? bheart : wheart} onClick={onClick} alt={"liked-icon"} />
      <span>{numliked}</span>
    </LikedWrapper>
  );
};
export default Liked;
