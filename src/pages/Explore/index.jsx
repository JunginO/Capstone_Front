import React from "react";
import styled from "styled-components";
import Explore from "./components/Explore";
const MainWrapper = styled.div`
  margin-top: 55px;
`;

const Index = () => {
  return (
    <MainWrapper>
      <Explore />
    </MainWrapper>
  );
};

export default Index;
