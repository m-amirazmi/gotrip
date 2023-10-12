import cx from "classnames";
import styles from "./usp.module.css";

interface UspProps {}

export default function Usp({}: UspProps) {
  return <div className={cx(styles["root"])}>Usp Component</div>;
}
