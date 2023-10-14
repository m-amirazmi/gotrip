"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import cx from "classnames";
import styles from "./popular-destination.module.css";
import Container from "../container/container";
import Title from "../title/title";
import Card from "../card/card";
import Spacer from "../spacer/spacer";
import Button from "../button/button";

export default function PopularDestination({
  content,
}: PopularDestinationProps) {
  const swiper = useSwiper();

  const handleNext = () => {};
  const handlePrev = () => {};

  return (
    <div className={cx(styles["root"])}>
      <Container>
        <Title title={content.title} subtitle={content.subtitle} />
      </Container>
      <Spacer size="xs" />
      {/* SLIDER HERE */}
      <Container>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              variant="info-portrait"
              title="United Kingdom"
              description="147,681 travellers"
              image={{
                src: "https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp",
                alt: "demo",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

interface PopularDestinationProps {
  content: {
    title: string;
    subtitle: string;
  };
}
