import cx from "classnames";
import styles from "./best-seller.module.css";

interface BestSellerProps {}

export default function BestSeller({}: BestSellerProps) {
  return <div className={cx(styles["root"])}>BestSeller Component</div>;
}
