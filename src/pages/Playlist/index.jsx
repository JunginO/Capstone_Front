import React from "react";
import styled from "styled-components";
import PlaylistContentBox from "./components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
import { playlist } from "../../components/dummyData";
import PlaylistTop from "./components/PlaylistTop";

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
  return (
    <MainWrapper>
      {playlist.map((data) => (
        <div>
          <PlaylistTop data={data} />
        </div>
      ))}

      <div className="contents-wrapper">
        {playlistContents.map((data) => (
          <PlaylistContentBox data={data} />
        ))}
      </div>
    </MainWrapper>
  );
};

export default Index;
