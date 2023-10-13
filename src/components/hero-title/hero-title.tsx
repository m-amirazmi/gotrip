import cx from "classnames";
import styles from "./hero-title.module.css";
import Text from "../text/text";

interface HeroTitleProps {
  content: {
    "title-line-1": string;
    "title-line-2": string;
    subtitle: string;
  };
}

export default function HeroTitle({ content }: HeroTitleProps) {
  return (
    <div className={cx(styles["root"])}>
      <Text tag="h1">
        {content["title-line-1"] && (
          <Text tag="span" color="yellow">
            {content["title-line-1"]}
          </Text>
        )}
        <br />
        {content["title-line-2"] && (
          <Text tag="span" color="white">
            {content["title-line-2"]}
          </Text>
        )}
      </Text>
      <Text color="white" tag="p">
        {content.subtitle}
      </Text>
    </div>
  );
}
