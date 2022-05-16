import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import comment from "../../../assets/comment.png";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Liked from "./Liked";
import axios from "axios";
const BoxWrapper = styled.div`
  .content-box {
    border-bottom: 10px solid lightgray;
    padding: 10px;
    margin-bottom: 10px;
  }
  .bigtitle {
    font-weight: bold;
  }
  .tag-box {
    margin-top: 5px;
    height: 25px;
  }
  .icon-box {
    width: 12px;
    margin-right: 5px;
    margin-left: 5px;
  }
  .text-link {
    color: inherit;
    text-decoration: inherit;
  }
  .likebtn {
    border: none;
  }
`;

const Feedbox = ({ data }) => {
  const [liked, setLiked] = useState(null);
  const [numlike, setNumLiked] = useState(3);

  const onClickLike = async (e) => {
    //const res = await axios.post(); //클릭시 좋아요 갱신
    setLiked(!liked);
  };

  return (
    <BoxWrapper>
      <Card>
        <Card.Body>
          <ProfilePackage data={data} />
          <Link to="/playlist" className="text-link">
            <div className="main-box">
              <div className="bigtitle">{data.bigtitle}</div>
              <div className="title">{data.title}</div>
              <div className="content">{data.content}</div>
            </div>
          </Link>
          <div>
            <Liked liked={liked} numliked={numlike} onClick={onClickLike} />
            <img className="icon-box" src={comment} alt="comment" />
            <span>{data.comment}</span>
          </div>
        </Card.Body>
      </Card>
    </BoxWrapper>
  );
};
export default Feedbox;
