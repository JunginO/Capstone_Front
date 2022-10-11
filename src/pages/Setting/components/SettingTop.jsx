import React from "react";
import styled from "styled-components";
import imgs from "./../../../assets/profileimg.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { InterestModal } from "./InterestModal";
const TopWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 110px;

  .center-box {
    padding: 60px 0 0;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .profile {
    width: 175px;
    height: 175px;
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

const SettingTop = () => {
  let id = window.localStorage.getItem("userId");

  const [modalShow, setModalShow] = React.useState(false);

  const setData = () => {
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("logged-in");
  };
  return (
    <TopWrapper>
      <div className="center-box">
        <img className="profile" alt="profileimg" src={imgs} />
        <h3>{JSON.parse(id)}</h3>
        <div className="button-box">
          <Button className="m-3" href="/editprofile">정보 수정</Button>
          <Button className="m-3" href="/" onClick={setData}>
            로그아웃
          </Button>
        </div>
      </div>

      <div className="menu">
        <div className="menu-box">계정 설정</div>
        <div className="menu-box" onClick={()=>setModalShow(true)}>관심 주제 설정</div>
        <InterestModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="menu-box">알림 설정</div>

      </div>
    </TopWrapper>
  );
};
export default SettingTop;
