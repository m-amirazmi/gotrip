import cx from "classnames";
import styles from "./popular-destination.module.css";

interface PopularDestinationProps {}

export default function PopularDestination({}: PopularDestinationProps) {
  return <div className={cx(styles["root"])}>PopularDestination Component</div>;
}
