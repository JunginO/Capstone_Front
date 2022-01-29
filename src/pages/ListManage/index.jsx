import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import PlaylistContentBox from "../Playlist/components/PlaylistContentBox";
import { playlistContents } from "../../components/dummyData";
import { ListDetail } from "../../components/dummyData";
import profileimg from "../../assets/profileimg.png";
import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "../../components/Modal";
const PostWrapper = styled.div`
  .main {
    margin: 0px 100px;
    margin-top: 55px;
  }

  .img-box {
    width: 100px;
  }
  .title-box {
    display: inline-block;
    margin-left: 10px;
  }
  .content-box {
    font-weight: 300;
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
`;

const Index = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setModalIsOpen(!modalIsOpen);
    console.log(modalIsOpen);
  };

  return (
    <PostWrapper>
      <div className="main">
        {ListDetail.map((data) => (
          <div>
            <img className="img-box" src={profileimg} alt="사진"></img>
            <div className="title-box">
              <h3>{data.title}</h3>
              <span>{data.id}</span>
            </div>
            <h4 className="content-box">{data.content}</h4>
          </div>
        ))}
        <div className="contents-wrapper">
          {playlistContents.map((data) => (
            <PlaylistContentBox data={data} />
          ))}
        </div>
        <button className="add-plan-box" onClick={() => setModalIsOpen(true)}>
          추가하기
        </button>
        <Modal isOpen={modalIsOpen} onCancel={handleClick} />
      </div>
    </PostWrapper>
  );
};

export default Index;
