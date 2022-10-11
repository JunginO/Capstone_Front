import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PositionCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;
const MainBox = styled.div`
margin-top:100px;
  width: 500px; 
  margin-bottom: 111px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  background-color: #0c4aa1;
`;
const Logo = styled(Link)`
  font-size: 2.4rem;
  letter-spacing: 2px;
  text-decoration: none;
  font-weight: bold;
  color: white;
`;
const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const AuthWrapper = ({ children }) => {
  return (
    <PositionCenter>
      <MainBox>
        <LogoWrapper>
          <Logo to="/">Capstone</Logo>
        </LogoWrapper>
        <Contents>{children}</Contents>
      </MainBox>
    </PositionCenter>
  );
};
export default AuthWrapper;
