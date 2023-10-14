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
  variant = "icon",
}: CardProps) {
  return (
    <div
      className={cx(
        styles["root"],
        styles[variant],
        shadow && styles["shadow"]
      )}
    >
      <div className={cx(styles["image"])}>
        {variant === "icon" && (
          <Image src={image.src} alt={image.alt} width={70} height={70} />
        )}
        {variant.includes("info") && (
          <Image src={image.src} alt={image.alt} fill />
        )}
      </div>
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
  variant: "info-square" | "info-portrait" | "icon";
}
