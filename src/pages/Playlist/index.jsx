import React from "react";
import styled from "styled-components";
import PlaylistContentBox from "./components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
import { playlist } from "../../components/dummyData";
import PlaylistTop from "./components/PlaylistTop";
import PlaylistMid from "./components/PlaylistMid";
import { comments } from "../../components/dummyData";
import PlaylistCommentBox from "./components/PlaylistCommentBox";
import PlaylistComment from "./components/PlaylistComment";
const MainWrapper = styled.div`
  margin-top: 55px;
  .contents-wrapper {
  }
  .main-wrapper {
    margin: 0px 100px;
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
          <div className="main-wrapper">
            <PlaylistMid data={data} />
          </div>
        </div>
      ))}

      <div className="main-wrapper">
        <div className="contents-wrapper">
          {playlistContents.map((data) => (
            <PlaylistContentBox data={data} />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
/*
<div className="comment">
          <PlaylistComment />
          {comments.map((data) => (
            <PlaylistCommentBox data={data} />
          ))}
        </div>*/
