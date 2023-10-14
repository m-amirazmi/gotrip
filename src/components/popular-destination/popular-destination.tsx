"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type SwiperType from "swiper";
import cx from "classnames";
import styles from "./popular-destination.module.css";
import Container from "../container/container";
import Title from "../title/title";
import Card from "../card/card";
import Spacer from "../spacer/spacer";
import Button from "../button/button";
import { useEffect, useRef, useState } from "react";
import SliderDots from "../slider-dots/slider-dots";
import { IImage } from "@/utils/types";

export default function PopularDestination({
  content,
}: PopularDestinationProps) {
  const slidesPerGroup = 5;
  const [slidesNo, setSlidesNo] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!content.items || content.items.length === 0 || !swiperRef.current)
      return;
    setSlidesLength(swiperRef.current.snapGrid.length);
  }, [content.items]);

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };
  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };
  const handleSlideChange = (e: SwiperType): void => {
    setSlidesNo(e.snapIndex);
  };
  const handleSlideTo = (index: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index * slidesPerGroup);
  };

  return (
    <div className={cx(styles["root"])}>
      <Container>
        <div className={cx(styles["title"])}>
          <Title title={content.title} subtitle={content.subtitle} />
          <SliderDots
            arrows
            length={slidesLength}
            selected={slidesNo}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleSlideTo={handleSlideTo}
          />
        </div>
      </Container>
      <Spacer size="xs" />
      <Container>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={slidesPerGroup}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {content.items.map((i, k) => (
            <SwiperSlide key={k}>
              <Card
                variant="info-portrait"
                title={i.title}
                description={i.description}
                image={i.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

interface PopularDestinationProps {
  content: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      image: IImage;
    }[];
  };
}
