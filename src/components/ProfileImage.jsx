import React from "react";
import styled from "styled-components";
import imgs from "../assets/profileimg.png";
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  .profile {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`;
const ProfileImage = () => {
  return (
    <ImageWrapper>
      <img className="profile" alt="profileimg" src={imgs} />
    </ImageWrapper>
  );
};
export default ProfileImage;
