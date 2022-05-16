import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feedbox from "./components/Feedbox";
import axios from "axios";
import { feed } from "../../components/dummyData";
const MainWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 120px;
  background-color: white;
  .feed {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .underline {
    border-bottom: 3px solid gray;
    padding-bottom: 5px;
  }
`;

const Index = () => {
  const [data, setData] = useState(null);
  // const fetchData = async () => {
  //   const data = await axios.get();
  //   setData(data);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <MainWrapper>
      <div className="underline">
        <span className="feed">Feed</span>
      </div>
      {feed.map((data) => (
        <div>
          <Feedbox data={data} />
        </div>
      ))}
    </MainWrapper>
  );
};

export default Index;
