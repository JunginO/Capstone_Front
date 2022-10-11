import React from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import { Button } from "react-bootstrap";
import images from "../../../assets/images.png";
import { useState } from "react";
import { AlertModal } from "../../../components/AlertModal";

import { ToggleButton } from "react-bootstrap";
const TopWrapper = styled.div`
  margin-top: 55px;
  padding: 50px 0 0;

  .img-box {
    width: 240px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
  }
  .title-box {
    display: inline-block;
    margin-left: 10px;
    padding: 14px 50px 0px 35px;
  }
  .content-box {
    font-weight: 200;
  }
  h2 {
    font-weight: bold;
  }
  .upper-box {
    padding: 0 0 0 50px;
  }
`;

const PlaylistTop = ({ data }) => {
  const [showmodal, setShowModal] = useState(false);
  
  const [checked, setChecked] = useState(false);
  return (
    <TopWrapper>
      <div className="upper-box">
        <img className="img-box" src={images} alt="사진"></img>
        <div className="title-box">
          <h2>{data.title}</h2>
          <div className="bottom-box">
            <ProfilePackage data={data} />
          </div>
          <AlertModal
            size="sm"
            show={showmodal}
            onHide={() => setShowModal(false)}
            text={"추가됨"}
          />
                <ToggleButton
        className="m-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="0"
        onChange={(e) => setChecked(e.currentTarget.checked)}
        onClick={() => {setShowModal(true)}}
      >
        {checked?"추가됨":"추가하기"}
      </ToggleButton>
 
        </div>
      </div>
    </TopWrapper>
  );
};
export default PlaylistTop;
