import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import PlaylistContentBox from "../Playlist/components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
const PostWrapper = styled.div`
  .post-title {
    width: 100%;
    border-bottom: 1px solid rgb(158, 164, 170);
    font-size: 18px;
  }
  .post-content {
    width: 100%;
    margin-top: 16px;
    height: auto;
    overflow-x: hidden;
    min-height: 100px;
    max-height: 500px;
    line-height: 1.25;
  }

  .main {
    margin: 0px 100px;
    margin-top: 55px;
  }
  .input-file {
    border: 1px solid gray;
    background-color: white;
  }
  .text-title {
    font-size: 20px;
    text-align: center;
  }
  .finish {
    float: right;
    margin: 10px 0px;
  }
  .bottom-box {
    float: right;
    margin: 10px 0px;
  }
  .btn {
    width: 100%;
    height: 30px;
    margin-top: 10px;
  }
  .top-box {
    background-color: #157a9c;
    height: 40px;
  }
`;

const Index = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <PostWrapper>
      <div className="main">
        <form>
          <div className="top-box">
            <p className="text-title">글 쓰기</p>

            <button className="finish" onClick={() => alert("완료!")}>
              <span>업로드</span>
            </button>
          </div>

          <input class="post-title" type="text" placeholder="제목" value="" />

          <textarea
            class="post-content"
            placeholder="내용을 입력하세요."
            spellcheck="false"
            wrap="physical"
          ></textarea>
          <label for="start">Start date:</label>
          <input type="date" id="start" name="playlist-start" />
          <label for="end">End date:</label>
          <input type="date" id="end" name="playlist-end" />
        </form>
        <button className="btn">+추가</button>
        <div className="contents-wrapper">
          {playlistContents.map((data) => (
            <PlaylistContentBox data={data} />
          ))}
        </div>
        <div class="bottom-box">
          <input
            type="file"
            style={{ display: "none" }}
            id="upload_photo"
            accept="image/*"
          />
          <label for="upload_photo" className="input-file">
            커버 사진 업로드
          </label>
        </div>
      </div>
    </PostWrapper>
  );
};

export default Index;
