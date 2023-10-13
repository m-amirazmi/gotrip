import cx from "classnames";
import styles from "./hero-images.module.css";
import Image from "next/image";

export default function HeroImages({ content }: HeroImagesProps) {
  return (
    <div className={cx(styles["root"])}>
      {content.main && (
        <Image
          src={content.main.src}
          alt={content.main.alt}
          width={410}
          height={500}
          className={cx(styles["image"])}
        />
      )}
      <div className={cx(styles["image-small"])}>
        {content.sub &&
          content.sub.map((i, k) => (
            <Image
              key={k}
              src={i.src}
              alt={i.alt}
              width={300}
              height={235}
              className={cx(styles["image"])}
            />
          ))}
      </div>
    </div>
  );
}

export interface IHeroImage {
  src: string;
  alt: string;
}

interface HeroImagesProps {
  content: {
    main: IHeroImage;
    sub: IHeroImage[];
  };
}
