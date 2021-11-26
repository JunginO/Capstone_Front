import React from "react";
import styled from "styled-components";
import { feed } from "../../../components/dummyData";
import Feedbox from "./Feedbox";
const MainWrapper = styled.div`
  margin: 0px 100px;
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

const Feed = () => {
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
export default Feed;
