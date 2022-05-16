import React from "react";
import styled from "styled-components";
import MyList from "./components/Mylist";
import { Tabs, Tab } from "react-bootstrap";

const MainWrapper = styled.div`
  margin-top: 55px;
`;

const Index = () => {
  //탭선택시 axios로 태그이름에 해당하는데이타 요청하기~
  return (
    <MainWrapper>
      <Tabs defaultActiveKey="home" className="mb-3">
        <Tab eventKey="home" title="전체">
          <MyList />
        </Tab>
        <Tab eventKey="theme1" title="개발자 되기">
          <MyList />
        </Tab>
        <Tab eventKey="theme2" title="건강">
          <MyList />
        </Tab>
        <Tab eventKey="theme3" title="클래식">
          <MyList />
        </Tab>
      </Tabs>
    </MainWrapper>
  );
};

export default Index;
