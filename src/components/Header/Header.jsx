import React from "react";
import styled from "styled-components";

const PositionFix = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
`;

//헤더배경,내용 중간정렬
const WhiteBackGround = styled.div`
  background: lightblue;
  display: flex;
  justify-content: center;
  height: auto;
`;
//헤더 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
`;
//로고
const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;
//여백
const Spacer = styled.div`
  flex-grow: 1;
`;
const Header = ({ children }) => {
  return (
    <PositionFix>
      <WhiteBackGround>
        <HeaderContents>
          <Logo>Capstone</Logo>
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackGround>
    </PositionFix>
  );
};
export default Header;
