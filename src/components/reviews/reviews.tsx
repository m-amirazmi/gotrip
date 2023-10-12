import cx from "classnames";
import styles from "./reviews.module.css";

interface ReviewsProps {}

export default function Reviews({}: ReviewsProps) {
  return <div className={cx(styles["root"])}>Reviews Component</div>;
}
