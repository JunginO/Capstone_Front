import React from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import TagButton from "../../../components/TagButton";
const TopWrapper = styled.div`
  .top-back {
    height: 120px;
  }
  .top-part {
    background-color: #157a9c;
    margin: 0px 100px;
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
`;

const PlaylistTop = ({ data }) => {
  return (
    <TopWrapper>
      <div className="top-back">
        <div className="top-part">
          <h1>{data.title}</h1>
          <div className="bottom-box">
            <ProfilePackage data={data} />
            <div className="like-btn">
              <TagButton data="좋아요" />
              <TagButton data="추가+" />
            </div>
          </div>
        </div>
      </div>
    </TopWrapper>
  );
};
export default PlaylistTop;
