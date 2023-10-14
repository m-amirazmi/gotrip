"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type SwiperType from "swiper";
import cx from "classnames";
import styles from "./title-slider.module.css";
import Container from "../container/container";
import Title from "../title/title";
import Card from "../card/card";
import Spacer from "../spacer/spacer";
import { useEffect, useRef, useState } from "react";
import SliderDots from "../slider-dots/slider-dots";
import { IImage } from "@/utils/types";

export default function TitleSlider({
  content,
  column = 4,
  aspectRatio = "portrait",
}: TitleSliderProps) {
  const slidesPerGroup = column;
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
          {content.items.length !== column && (
            <SliderDots
              arrows
              length={slidesLength}
              selected={slidesNo}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleSlideTo={handleSlideTo}
            />
          )}
        </div>
      </Container>
      <Spacer size="xs" />
      <Container>
        <Swiper
          spaceBetween={30}
          slidesPerView={column}
          slidesPerGroup={slidesPerGroup}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {content.items.map((i, k) => (
            <SwiperSlide key={k}>
              <Card
                variant={`info-${aspectRatio}`}
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

interface TitleSliderProps {
  content: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      image: IImage;
    }[];
  };
  column?: number;
  aspectRatio?: "square" | "portrait";
}
