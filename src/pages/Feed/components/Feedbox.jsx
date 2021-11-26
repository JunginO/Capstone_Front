import React from "react";
import styled from "styled-components";
import ProfilePackage from "../../../components/ProfilePackage";
import heart from "../../../assets/whiteheart.png";
import comment from "../../../assets/comment.png";
import { Link } from "react-router-dom";
const BoxWrapper = styled.div`
  .content-box {
    border-bottom: 10px solid lightgray;
    padding: 10px;
    margin-bottom: 10px;
  }
  .title {
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
`;

const Feedbox = ({ data }) => {
  return (
    <BoxWrapper>
      <Link to="/playlist" className="text-link">
        <div className="content-box">
          <ProfilePackage data={data} />
          <div className="main-box">
            <div className="title">{data.title}</div>
            <div className="content">{data.content}</div>
          </div>
          <div>
            <span>
              <img className="icon-box" src={heart} alt="like" />
              {data.like}
            </span>
            <img className="icon-box" src={comment} alt="comment" />
            <span>{data.comment}</span>
          </div>
        </div>
      </Link>
    </BoxWrapper>
  );
};
export default Feedbox;
