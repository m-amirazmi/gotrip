import styles from "./button.module.css";
import cx from "classnames";

interface ButtonProps {
  /**
   * Button tag - link or normal button
   */
  tag?: "a" | "button";
  /**
   * Choose the button type
   */
  variant?: "solid" | "outline" | "ghost" | "solid-grey";
  /**
   * The color of the button
   */
  color?: "blue-1" | "blue-2" | "blue-3" | "blue-4" | "yellow" | "white";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Is the button selected?
   */
  isSelected?: boolean;
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Additional classes for the button
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default function Button({
  variant = "solid",
  color = "blue-1",
  children,
  size = "medium",
  tag = "button",
  isSelected = false,
  className = "",
  onClick,
}: ButtonProps) {
  if (!children) return null;

  const Element = tag;

  return (
    <Element
      className={cx(
        styles["root"],
        styles[color],
        styles[variant],
        styles[size],
        isSelected && styles["selected"],
        className
      )}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
