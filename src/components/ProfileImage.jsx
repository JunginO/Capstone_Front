import React from "react";
import styled from "styled-components";
import imgs from "../assets/profileimg.png";
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  .profile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  margin-right: 10px;
`;
const ProfileImage = () => {
  return (
    <ImageWrapper>
      <img className="profile" alt="profileimg" src={imgs} />
    </ImageWrapper>
  );
};
export default ProfileImage;
