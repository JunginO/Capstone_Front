import React from "react";
import styled from "styled-components";

import imgs from "./../../../assets/profileimg.png";
const TopWrapper = styled.div`
  .top-back {
    height: 120px;
    background-color: #157a9c;
    display: flex;
    justify-content: center;
    margin-top: 55px;
    padding: 20px 0px;
  }
  .center-box {
    display: flex;
    flex-direction: column;
  }
  .profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
`;

const MypageTop = () => {
  return (
    <TopWrapper>
      <div className="top-back">
        <div className="center-box">
          <img className="profile" alt="profileimg" src={imgs} />
          <h3>유저 001</h3>
        </div>
      </div>
    </TopWrapper>
  );
};
export default MypageTop;
