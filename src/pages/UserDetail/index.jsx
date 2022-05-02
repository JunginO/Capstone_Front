import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import imgs from "../../assets/profileimg.png";
import { feed } from "../../components/dummyData";
import { Tabs, Tab } from "react-bootstrap";
import Feedbox from "../Feed/components/Feedbox";
import { exploreDummy } from "../../components/dummyData";
import Goal from "./components/Goal";
const MainWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 110px;
  .user-profile {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  }
  .center-box {
    padding: 60px 0 0;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .nickname {
    padding: 21px 0 0;
  }
`;
const Index = () => {
  return (
    <MainWrapper>
      <div className="center-box">
        <img className="user-profile" alt="profileimg" src={imgs} />
        <h3 className="nickname">SooYoung</h3>
        <div>
          <span>팔로워 224 팔로잉 433</span>
        </div>
        <div className="button-box">
          <Button>팔로우</Button>
        </div>
      </div>
      <Tabs defaultActiveKey="home" className="mb-3">
        <Tab eventKey="home" title="Goals">
          {exploreDummy.map((data) => (
            <div>
              <Goal data={data} />
            </div>
          ))}
        </Tab>
        <Tab eventKey="theme1" title="Feeds">
          {feed.map((data) => (
            <div>
              <Feedbox data={data} />
            </div>
          ))}
        </Tab>
      </Tabs>
    </MainWrapper>
  );
};
export default Index;
