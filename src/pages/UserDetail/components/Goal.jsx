import React from "react";
import styled from "styled-components";
import images from "../../../assets/images.png";
import { Card } from "react-bootstrap";
const GoalWrapper = styled.div`
  .goal-img-box {
    width: 63px;
    height: 63px;
    float: left;
    border-radius: 4px;
  }

  .titles {
    padding: 8px 0 0;
    margin: 0;
  }
  .goal-title {
    padding: 6px 0 0;
    margin: 0;
    font-size: 20px;
  }
  .goal-info {
    display: inline-block;
    margin-left: 20px;
  }
`;
const Goal = ({ data }) => {
  return (
    <GoalWrapper>
      <div className="goal-box">
        <Card body>
          <img src={images} className="goal-img-box" alt="title-img" />
          <div className="goal-info">
            <p className="goal-title">{data.title}</p>
            <p className="goal">{data.id}</p>
          </div>
        </Card>
      </div>
    </GoalWrapper>
  );
};
export default Goal;
