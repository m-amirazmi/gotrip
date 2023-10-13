import cx from "classnames";
import styles from "./column.module.css";

export default function Column({ columnNo = 2, gap, children }: ColumnProps) {
  return (
    <div
      className={cx(
        styles["root"],
        styles[`column-${columnNo}`],
        gap && styles[`gap-${gap}`]
      )}
    >
      {children}
    </div>
  );
}

interface ColumnProps {
  columnNo: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
