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
        <Tab eventKey="theme1" title="건강">
          <MyList />
        </Tab>
        <Tab eventKey="theme2" title="취미">
          <MyList />
        </Tab>
        <Tab eventKey="theme3" title="학습">
          <MyList />
        </Tab>
        <Tab eventKey="theme4" title="어학">
          <MyList />
        </Tab>
        <Tab eventKey="theme5" title="IT">
          <MyList />
        </Tab>
        <Tab eventKey="theme6" title="기타">
          <MyList />
        </Tab>
      </Tabs>
    </MainWrapper>
  );
};

export default Index;
