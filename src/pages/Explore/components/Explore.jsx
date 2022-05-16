import React from "react";
import styled from "styled-components";
import ExploreBox from "./ExploreBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination } from "swiper";
import { exploreDummy } from "../../../components/dummyData";

// install Swiper modules
SwiperCore.use([Pagination]);

const MainWrapper = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1px;
  }
`;

const SlideStyler = styled(Swiper)`
  position: relative;
`;
const Explore = () => {
  return (
    <MainWrapper>
      <div className="playlist">
        <p className="title">인기 플레이리스트</p>
        <SlideStyler
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {exploreDummy.map((data) => (
            <SwiperSlide>
              <ExploreBox data={data} />
            </SwiperSlide>
          ))}
        </SlideStyler>
      </div>
    </MainWrapper>
  );
};
export default Explore;
