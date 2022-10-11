import React from "react";
import styled from "styled-components";
import images from "../../assets/images.png";
import { useState } from "react";
import { CloseButton, Button,Modal } from "react-bootstrap";
import { OffCanvas } from "./Offcanvas";
import { FinishModal } from "./FinishModal";
 
  
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
    padding:0 0;
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
  .bbox
  {display:flex;}
  .btn-tmp{
    margin-right:10px;
  }
`;
const Playbar = () => {
 const [visible,setVisible]=useState(true);
 const [modalShow, setModalShow] = React.useState(false);
  return (

    visible&&<PlaybarWrapper>
      <div className="title-box">
        <img src={images} className="img-box" alt="title-img" />
        <div className="track-info">
          <p className="titles">캡스톤 디자인 프로젝트</p>
          <p className="titles-plan">발표자료 완성하기</p>
        </div>
      </div>
      <div className="bbox">
        <Button className="btn-tmp" onClick={()=>{setModalShow(true);}}>완료</Button>
        <FinishModal 
        show={modalShow}
        onHide={() =>{ setModalShow(false);setVisible(false)}}
      />
        <OffCanvas name={"다른 목표"} />
        <CloseButton className="m-3"variant="white" onClick={()=>{setVisible(false);window.localStorage.removeItem("visible");
}}/>
      </div>
    </PlaybarWrapper>
  );
};
export default Playbar;
