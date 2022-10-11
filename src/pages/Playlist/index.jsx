import React, { useState } from "react";
import styled from "styled-components";
import PlaylistContentBox from "./components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
import { playlist } from "../../components/dummyData";
import PlaylistTop from "./components/PlaylistTop";
import { Button } from "react-bootstrap";
import { AddPlanModal } from "./components/AddPlanModal";
const MainWrapper = styled.div`
  margin-top: 55px;
  margin-bottom: 120px;
  .contents-wrapper {
  }

  .comment {
    margin-top: 10px;
  }
`;

const Index = () => {
  const [modalShow, setModalShow] = React.useState(false);
const[value,setValue]=useState(true);
  return (
    <MainWrapper>
      {playlist.map((data) => (
        <div>
          <PlaylistTop data={data} />
        </div>
      ))}

      <div className="contents-wrapper" className="m-3" >
        {playlistContents.map((data) => (
          <PlaylistContentBox data={data} />
        ))}
      </div>
      
      <Button  className="m-3"  onClick={() => setModalShow(true)}>추가하기</Button>
      <AddPlanModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </MainWrapper>
  );
};

export default Index;
