import React from "react";
import styled from "styled-components";
import Feed from "./components/Feed";
const MainWrapper = styled.div`
  margin-top: 55px;
`;

const Index = () => {
  return (
    <MainWrapper>
      <Feed />
    </MainWrapper>
  );
};

export default Index;
