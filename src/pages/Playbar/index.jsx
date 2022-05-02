import React from "react";
import styled from "styled-components";
import images from "../../assets/images.png";
import { useState } from "react";
import { CloseButton, Button } from "react-bootstrap";
import { OffCanvas } from "./Offcanvas";
const PlaybarWrapper = styled.div`
  background-color: black;
  color: white;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 111px;
  padding: 1rem;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .img-box {
    width: 63px;
    height: 63px;
    float: left;
    border-radius: 4px;
  }
  .titles {
    padding: 8px 0 0;
    margin: 0;
  }
  .titles-plan {
    padding: 6px 0 0;
    margin: 0;
    font-size: 20px;
  }
  .track-info {
    display: inline-block;
    margin-left: 20px;
  }
  span {
    padding-right: 10px;
  }
`;
const Playbar = () => {
  return (
    <PlaybarWrapper>
      <div className="title-box">
        <img src={images} className="img-box" alt="title-img" />
        <div className="track-info">
          <p className="titles">goal title</p>
          <p className="titles-plan">plan title</p>
        </div>
      </div>
      <div>
        <Button>완료</Button>
        <OffCanvas name={"다른 목표"} />

        <CloseButton variant="white" />
      </div>
    </PlaybarWrapper>
  );
};
export default Playbar;
