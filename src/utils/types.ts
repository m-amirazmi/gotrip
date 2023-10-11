export interface IButton {
  children: React.ReactNode;
  type?: "outline" | "solid";
  color?: "blue-1" | "blue-2" | "blue-3" | "blue-4" | "yellow" | "white";
  size?: "small" | "medium" | "large";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IText {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";
}

export interface IButtonProps {
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
   * Target link
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
