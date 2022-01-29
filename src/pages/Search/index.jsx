import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { feed } from "../../components/dummyData";

const MainWrapper = styled.div`
  margin-top: 200px;
`;

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const filtered = feed.filter((k) => k.title.includes(keyword));
  return (
    <MainWrapper>
      <input
        type="text"
        placeholder="검색"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <div>
        {keyword === "" ? (
          <p>검색어를 입력해보세용</p>
        ) : (
          filtered.map((data) => {
            console.log(data);
            return (
              <div>
                <p>{data.bigtitle}</p>
                <p>{data.title}</p>
              </div>
            );
          })
        )}
      </div>
    </MainWrapper>
  );
};

export default Index;
