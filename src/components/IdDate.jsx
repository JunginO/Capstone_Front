import React from "react";
import styled from "styled-components";

const IdDateWrapper = styled.div`
  margin-left: 10px;
  .id {
    font-size: 12px;
  }
  .date {
    font-size: 8px;
  }
`;

const IdDate = ({ data }) => {
  return (
    <IdDateWrapper>
      <div>
        <span className="id">{data.id}</span>
        {/*<p className="date">{data.date}</p>*/}
      </div>
    </IdDateWrapper>
  );
};
export default IdDate;
