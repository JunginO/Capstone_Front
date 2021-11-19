import React from "react";
import styled from "styled-components";
import IdDate from "./IdDate";
import ProfileImage from "./ProfileImage";
const TopWrapper = styled.div`
  .img-id-box {
    display: flex;
    margin-left: 10px;
  }
`;

const ProfilePackage = ({ data }) => {
  return (
    <TopWrapper>
      <div className="img-id-box">
        <ProfileImage />
        <IdDate data={data} />
      </div>
    </TopWrapper>
  );
};
export default ProfilePackage;
