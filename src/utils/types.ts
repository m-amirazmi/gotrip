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
