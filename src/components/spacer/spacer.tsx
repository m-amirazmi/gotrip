import cx from "classnames";
import styles from "./spacer.module.css";

interface SpacerProps {
  size?: "xs" | "sm" | "md" | "lg";
}

export default function Spacer({ size = "md" }: SpacerProps) {
  return <div className={cx(styles["root"], styles[size])}></div>;
}
