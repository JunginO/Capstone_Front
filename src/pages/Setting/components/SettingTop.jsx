import React from "react";
import styled from "styled-components";
import imgs from "./../../../assets/profileimg.png";
import { Link } from "react-router-dom";
const TopWrapper = styled.div`
  .top-back {
    background-color: lightgray;
    display: flex;
    justify-content: center;
    margin-top: 55px;
    padding: 20px 0px;
  }
  .center-box {
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .profile {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
  .button-box {
    display: block;
  }
  .menu {
    margin: 20px 50px;

    padding: 15px;
  }
  .menu-box {
    margin: 5px;
    border: 2px solid gray;
    border-radius: 5px;
    padding: 5px;
  }
`;

const SettingButton = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: blue;
  text-decoration: none;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const SettingTop = () => {
  let id = window.localStorage.getItem("userId");

  const setData = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("logged-in");
  };
  return (
    <TopWrapper>
      <div className="top-back">
        <div className="center-box">
          <img className="profile" alt="profileimg" src={imgs} />
          <h3>{JSON.parse(id)}</h3>
          <div className="button-box">
            <SettingButton to="/editprofile">정보 수정</SettingButton>
            <SettingButton to="/" onClick={setData}>
              로그아웃
            </SettingButton>
          </div>
        </div>
      </div>
      <div className="menu">
        <div className="menu-box">계정 설정</div>
        <div className="menu-box">관심 주제 설정</div>
        <div className="menu-box">알림 설정</div>
      </div>
    </TopWrapper>
  );
};
export default SettingTop;