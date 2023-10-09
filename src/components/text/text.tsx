import cx from "classnames";
import styles from "./text.module.css";

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

export default function Text({ tag = "p", children, className }: TextProps) {
  if (!children) return null;

  const Element = tag;

  return (
    <Element className={cx(styles["root"], className)}>{children}</Element>
  );
}
