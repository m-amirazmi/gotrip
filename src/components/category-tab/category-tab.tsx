import cx from "classnames";
import styles from "./category-tab.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../button/button";
import { useRouter } from "next/router";

interface CategoryTabProps {
  /**
   * The list of category item
   */
  items: ICategoryTabItem[];
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
  items,
}: CategoryTabProps) {
  const [list, setList] = useState<ICategoryTabItem[]>([]);
  const [selected, setSelected] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    setList(items);
    setSelected(items[0].id);
  }, [items]);

  const handleSelected = (id: string) => {
    router.push(`/${id}`);
    setSelected(id);
  };

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
              <Image src={i.icon} alt={i.name} width={40} height={40} />
            </div>
          )}
          {i.name && <p>{i.name}</p>}
        </Button>
      ))}
    </div>
  );
}
