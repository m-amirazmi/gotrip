import cx from "classnames";
import styles from "./card.module.css";
import { IImage } from "@/utils/types";
import Image from "next/image";
import Text from "../text/text";

export default function Card({
  image,
  title,
  description,
  shadow = false,
}: CardProps) {
  return (
    <div className={cx(styles["root"], shadow && styles["shadow"])}>
      <Image
        className={cx(styles["image"])}
        src={image.src}
        alt={image.alt}
        width={70}
        height={70}
      />
      <Text tag="h5" color="blue-4">
        {title}
      </Text>
      <Text tag="p" color="grey-3">
        {description}
      </Text>
    </div>
  );
}

interface CardProps {
  image: IImage;
  title: string;
  description: string;
  shadow?: boolean;
}
