import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  font-weight: 500;
  background-color: lightblue;
  border-radius: 10%;
  text-decoration: none;
  margin-right: 5px;
  height: 100%;
  font-size: 80%;
`;
const TagButton = ({ data }) => {
  return <ButtonBox>{data}</ButtonBox>;
};
export default TagButton;
