import Link from "next/link";
import styles from "./button.module.css";
import cx from "classnames";

export default function Button({
  variant = "solid",
  color = "blue-1",
  children,
  size = "medium",
  tag = "button",
  isSelected = false,
  className = "",
  onClick,
  href,
}: ButtonProps) {
  console.log(color);
  if (!children) return null;

  const classes = cx(
    styles["root"],
    styles[color],
    styles[variant],
    styles[size],
    isSelected && styles["selected"],
    className
  );

  if (tag === "a" && href)
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

interface ButtonProps {
  /**
   * Button tag - link or normal button
   */
  tag?: "a" | "button";
  /**
   * Choose the button type
   */
  variant?: "solid" | "outline" | "ghost" | "solid-grey" | "text";
  /**
   * The color of the button
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
   * Target link
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
