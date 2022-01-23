import React from "react";
import styled from "styled-components";
import ExploreBox from "./ExploreBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

const MainWrapper = styled.div``;

const SlideStyler = styled(Swiper)`
  position: relative;
`;
const Explore = () => {
  return (
    <MainWrapper>
      <div>explore</div>
      <div className="playlist">
        <p>인기 플레이리스트</p>
        <SlideStyler
          slidesPerView={7}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
          <SwiperSlide>
            <ExploreBox />
          </SwiperSlide>
        </SlideStyler>
      </div>
      <div className="playlist">
        <p>관심주제:개발</p>
        <div>
          {" "}
          <SlideStyler
            slidesPerView={7}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
          </SlideStyler>
        </div>
      </div>
      <div className="playlist">
        <p>관심주제:음악</p>
        <div>
          {" "}
          <SlideStyler
            slidesPerView={7}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
            <SwiperSlide>
              <ExploreBox />
            </SwiperSlide>
          </SlideStyler>
        </div>
      </div>
    </MainWrapper>
  );
};
export default Explore;
