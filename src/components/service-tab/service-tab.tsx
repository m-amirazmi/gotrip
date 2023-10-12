"use client";

import cx from "classnames";
import styles from "./service-tab.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../button/button";
import { useParams, useRouter } from "next/navigation";

export default function ServiceTab({
  variant = "ghost",
  size = "medium",
  showIcon = false,
  items,
}: ServiceTabProps) {
  const [list, setList] = useState<IServiceTabItem[]>([]);
  const [selected, setSelected] = useState<string>("");

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    setList(() => items.filter((i) => i.enable));
    setSelected(items[0].id);
  }, [items]);

  const handleSelected = ({ id, path }: IServiceTabItem) => {
    router.push(path);
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
          onClick={() => handleSelected(i)}
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

interface ServiceTabProps {
  /**
   * The list of Service item
   */
  items: IServiceTabItem[];
  /**
   * Which Service tab variant?
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

export interface IServiceTabItem {
  enable: boolean;
  name: string;
  icon?: string;
  id: string;
  path: string;
}
