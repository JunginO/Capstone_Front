import React from "react";
import styled from "styled-components";
import { Playlistlist } from "../../../components/dummyData";
import MylistBox from "./MylistBox";
const MainWrapper = styled.div``;

const MyList = () => {
  return (
    <MainWrapper>
      {Playlistlist.map((data) => (
        <MylistBox data={data} />
      ))}
    </MainWrapper>
  );
};
export default MyList;
