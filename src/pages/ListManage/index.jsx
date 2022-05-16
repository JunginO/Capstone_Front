import React from "react";
import styled from "styled-components";
import PlaylistContentBox from "../Playlist/components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
import { ListDetail } from "../../components/dummyData";
import images from "../../assets/images.png";
import { useState } from "react";
import Modal from "../../components/InputModal";
import { Button } from "react-bootstrap";
const PostWrapper = styled.div`
  .main {
    margin-top: 55px;
    margin-bottom: 120px;
    padding: 50px 0 0;
  }

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

  .add-plan-box {
    border-radius: 1em;
    border: 1px solid gray;
    padding: 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background-color: lightblue;
  }
  .plan-box-title {
    display: inline-block;
    border-right: 1px solid gray;
    padding: 10px;
  }
  .plan-box-content {
    padding: 10px;
  }
  span {
    display: block;
  }
  h2 {
    font-weight: bold;
  }
  .contents-wrapper {
    padding-top: 70px;
  }
  .upper-box {
    padding: 0 0 0 50px;
  }
`;

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setModalIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
  };

  return (
    <PostWrapper>
      <div className="main">
        {ListDetail.map((data) => (
          <div className="upper-box">
            <img className="img-box" src={images} alt="사진"></img>
            <div className="title-box">
              <h2>{data.title}</h2>
              <span>{data.id}</span>
              <Button variant="primary" onClick={() => setModalIsOpen(true)}>
                추가하기
              </Button>
            </div>
            <div className="content-box">{data.content}</div>
          </div>
        ))}
        <div className="contents-wrapper">
          {playlistContents.map((data) => (
            <PlaylistContentBox data={data} />
          ))}
        </div>

        <Modal isOpen={modalIsOpen} onCancel={handleClick} />
      </div>
    </PostWrapper>
  );
};

export default Index;
