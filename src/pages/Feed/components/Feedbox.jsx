import React, { useState } from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import wheart from "../../../assets/whiteheart.png";
import bheart from "../../../assets/blackheart.png";
import comment from "../../../assets/comment.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.value);
  const addValue = () => {
    setLiked(!liked);
    if (liked) {
      dispatch({ type: "decrement" });
    } else {
      dispatch({ type: "increment" });
    }
  };
  return (
    <BoxWrapper>
      <div className="content-box">
        <Link to="/playlist" className="text-link">
          <ProfilePackage data={data} />
          <div className="main-box">
            <div className="bigtitle">{data.bigtitle}</div>
            <div className="title">{data.title}</div>
            <div className="content">{data.content}</div>
          </div>
        </Link>
        <div>
          <button className="likebtn" onClick={() => addValue()}>
            <img
              className="icon-box"
              src={liked ? bheart : wheart}
              alt="like"
            />
            {value}
          </button>
          <img className="icon-box" src={comment} alt="comment" />
          <span>{data.comment}</span>
        </div>
      </div>
    </BoxWrapper>
  );
};
export default Feedbox;
