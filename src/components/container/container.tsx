import cx from "classnames";
import styles from "./container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={cx(styles["root"])}>{children}</div>;
}
