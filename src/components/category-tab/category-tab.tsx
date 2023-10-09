import cx from "classnames";
import styles from "./category-tab.module.css";
import mockData from "./category-tab.data.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../button/button";

interface CategoryTabProps {
  /**
   * Which category tab variant?
   */
  variant: "solid-grey" | "ghost";
  /**
   * The tab button size
   */
  size: "small" | "medium";
  /**
   * Show the icon on the tab
   */
  showIcon: boolean;
}

interface ICategoryTabItem {
  name: string;
  icon?: string;
  id: string;
}

export default function CategoryTab({
  variant = "ghost",
  size = "medium",
  showIcon = false,
}: CategoryTabProps) {
  const [list, setList] = useState<ICategoryTabItem[]>([]);
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    setList(mockData);
    setSelected(mockData[0].id);
  }, []);

  const handleSelected = (id: string) => setSelected(id);

  const tabColor = variant === "ghost" ? "white" : "blue-3";

  return (
    <div className={cx(styles["root"])}>
      {list.map((i, k) => (
        <Button
          key={k}
          color={tabColor}
          variant={variant}
          size={size}
          isSelected={i.id === selected}
          onClick={() => handleSelected(i.id)}
          className={cx(styles["item"])}
        >
          {i.icon && showIcon && (
            <div className={cx(styles["image"])}>
              <Image src={i.icon} alt={i.name} width={25} height={25} />
            </div>
          )}
          {i.name && <p>{i.name}</p>}
        </Button>
      ))}
    </div>
  );
}
