import React from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import TagButton from "../../../components/TagButton";
const TopWrapper = styled.div`
  .top-back {
    background-color: lightgray;
  }
  .top-part {
    display: inline-block;
  }
  .bottom-box {
    display: flex;
    justify-content: space-between;
  }
  .like-btn {
    height: 25px;
  }
  .img-id-box {
    display: flex;
    margin-left: 10px;
  }
  .img-box {
    width: 180px;
    display: inline-block;
    vertical-align: top;
    margin-left: 100px;
    padding: 10px;
  }
`;

const PlaylistTop = ({ data }) => {
  return (
    <TopWrapper>
      <div className="top-back">
        <img
          className="img-box"
          alt="img"
          src="https://blog.kakaocdn.net/dn/MwAL3/btqIJblKgo9/DWvKIbp3GoDoin6yNH4amK/img.png"
        ></img>
        <div className="top-part">
          <h1>{data.title}</h1>
          <div className="bottom-box">
            <ProfilePackage data={data} />
            {/*
            <div className="like-btn">
              <TagButton data="좋아요" />
              <TagButton data="추가+" />
            </div>
            */}
          </div>
        </div>
      </div>
    </TopWrapper>
  );
};
export default PlaylistTop;
