import cx from "classnames";
import styles from "./text.module.css";

export default function Text({
  tag = "p",
  size = "md",
  weight,
  color = "blue-4",
  children,
  className,
}: TextProps) {
  if (!children) return null;

  const Element = tag;

  return (
    <Element
      className={cx(
        styles["root"],
        tag === "p" && styles[size],
        weight && styles[weight],
        styles[color],
        className
      )}
    >
      {children}
    </Element>
  );
}

interface TextProps {
  /**
   * Choose any tag - default: p
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /**
   * The font size - applicable to p tag only
   */
  size?: "md" | "sm" | "xs";
  /**
   * Set the font weight for the text
   */
  weight?: "bold" | "normal" | "lighter" | "light";
  /**
   * Any text to be displayed
   */
  color?:
    | "blue-1"
    | "blue-2"
    | "blue-3"
    | "blue-4"
    | "yellow"
    | "white"
    | "grey"
    | "grey-2"
    | "grey-3"
    | "green";
  children: React.ReactNode;
  /**
   * Additional classname can be add to the text
   */
  className?: string;
}
