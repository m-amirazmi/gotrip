import cx from "classnames";
import styles from "./slider-dots.module.css";
import Button from "../button/button";
import Image from "next/image";
import arrowLeft from "@/assets/arrow-left.webp";
import arrowRight from "@/assets/arrow-right.webp";

function DotSelected() {
  return <span className={cx(styles["dot"], styles["dot-selected"])}></span>;
}

function Dot({ onClick }: { onClick: () => void }) {
  return <span onClick={onClick} className={cx(styles["dot"])}></span>;
}

export default function SliderDots({
  length,
  selected = 0,
  arrows = false,
  handleNext,
  handlePrev,
  handleSlideTo,
}: SliderDotsProps) {
  return (
    <div className={cx(styles["root"])}>
      {arrows && (
        <Button variant="text" onClick={handlePrev}>
          <Image src={arrowLeft} alt="arrow-left" width={24} height={24} />
        </Button>
      )}
      <div className={cx(styles["dots"])}>
        {Array(length)
          .fill("")
          .map((i, k) => {
            if (k === selected) return <DotSelected key={k} />;
            return <Dot key={k} onClick={() => handleSlideTo(k)} />;
          })}
      </div>
      {arrows && (
        <Button variant="text" onClick={handleNext}>
          <Image src={arrowRight} alt="arrow-right" width={24} height={24} />
        </Button>
      )}
    </div>
  );
}

interface SliderDotsProps {
  /**
   * The number of dots will be shown
   */
  length: number;
  /**
   * The selected number of dot
   */
  selected: number;
  arrows?: boolean;
  handlePrev?: () => void;
  handleNext?: () => void;
  handleSlideTo: (k: number) => void;
}
