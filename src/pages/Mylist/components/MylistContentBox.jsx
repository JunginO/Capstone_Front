import React from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import TagButton from "../../../components/TagButton";
const BoxWrapper = styled.div`
  .content-box {
    border-bottom: 1px solid skyblue;
    padding: 10px;
    margin-top: 10px;
  }
  .title {
    font-weight: bold;
  }
  .tag-box {
    margin-top: 5px;
    height: 25px;
  }
  .btn {
    float: right;
  }
`;
const MypageContentBox = ({ data }) => {
  return (
    <BoxWrapper>
      <div className="content-box">
        <ProfilePackage data={data} />
        <div className="btn">
          <TagButton data="좋아요" />
        </div>
        <div className="main-box">
          <div className="title">{data.title}</div>
          <div className="content">{data.content}</div>
        </div>
        <div className="tag-box">
          <TagButton data={data.tag} />
        </div>
      </div>
    </BoxWrapper>
  );
};
export default MypageContentBox;
