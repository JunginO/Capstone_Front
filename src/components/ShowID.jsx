import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ShowIDWrapper = styled.div`
  .id {
    font-size: 15px;
  }
  .text-link {
    color: inherit;
    text-decoration: inherit;
  }
`;

const ShowID = ({ data }) => {
  return (
    <ShowIDWrapper>
      <Link to="/userdetail" className="text-link">
        <span className="id">{data.id}</span>
      </Link>
    </ShowIDWrapper>
  );
};
export default ShowID;
