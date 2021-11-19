import React from "react";
import styled from "styled-components";
import MypageTop from "./components/MylistTop";
import MypageList from "./components/Mylist";

const MainWrapper = styled.div``;

const Index = () => {
  return (
    <MainWrapper>
      <MypageTop />
      <MypageList />
    </MainWrapper>
  );
};

export default Index;
