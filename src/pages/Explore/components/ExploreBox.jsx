import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const BoxWrapper = styled.div`
  img {
    position: absolute;
    top: 0;
    width: 42vh;
    height: 42vh;
    object-fit: cover;
  }
  .img-box {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 20px;
    overflow: hidden;
  }
  padding: 5px;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
const ExploreBox = () => {
  return (
    <BoxWrapper>
      <StyledLink to="/playlist">
        <div>
          <div className="img-box">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAALVBMVEVBRUhYXF5QVFZGSk5VWVtDR0o/Q0dITE9SVlhOUlVLT1JWWlxFSEtaXl9MUFJZGn4OAAABYUlEQVR4nO3awXKCMBRAUUQggrX//7lFsQKN1WwKM33nLDGLzJ0AAakqAAAAAAAAAAAAAAAAAAAAAAAAAOAvDH1doB/2nud2mkOpdu+pbqQvLnJo9p7rNrpxkQzHAmls0u092010pSfEtZ0k64HxkqT+1H+8GhguSX25XkBf3GjDJRku003l93USLUl3vt9n+98HRkvyvfU4LX9rm7QYGDXJapWMS2duEi3JYw+7WBZtszoQLkk1XUzq+XjbrCPFS1LV50Mz34MfRR5NAiYZz5TF4XbxfDw1CZlkafXG4NYkepIf71CuTYImSdO2pM3eKqWoSdK0VcuL3LYuEZOkafv6rMj47BMxSbpv6Z++iw2ZJD0rETrJ8WWRiEneFImY5E2RgElaSWaSZCTJ3JM0b8RLUjJQkmxgnCT+Js/4mCLnk5tc2YdZ9efe8wQAAAAAAAAAAAAAAAAAAAAAAACAf+oLG4cKxq0JLV4AAAAASUVORK5CYII="
              alt="일단 고양이"
            />
          </div>
          <div className="text-box">
            <div>토익 900달성</div>
            <div>김예원</div>
          </div>
        </div>
      </StyledLink>
    </BoxWrapper>
  );
};
export default ExploreBox;
