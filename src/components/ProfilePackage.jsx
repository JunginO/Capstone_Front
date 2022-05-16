import React from "react";
import styled from "styled-components";
import ShowID from "./ShowID";
import ProfileImage from "./ProfileImage";
import { Link } from "react-router-dom";
const TopWrapper = styled.div`
  .img-id-box {
    display: flex;
  }
  .text-link {
    color: inherit;
    text-decoration: inherit;
  }
`;

const ProfilePackage = ({ data }) => {
  return (
    <TopWrapper>
      <Link to="/userdetail" className="text-link">
        <div className="img-id-box">
          <ProfileImage />
          <ShowID data={data} />
        </div>
      </Link>
    </TopWrapper>
  );
};
export default ProfilePackage;
