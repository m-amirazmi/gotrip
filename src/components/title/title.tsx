import cx from "classnames";
import styles from "./title.module.css";
import Text from "../text/text";

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className={cx(styles["root"])}>
      {title && <Text tag="h2">{title}</Text>}
      {subtitle && (
        <Text tag="p" color="grey-3">
          {subtitle}
        </Text>
      )}
    </div>
  );
}

interface TitleProps {
  title: string;
  subtitle: string;
}
