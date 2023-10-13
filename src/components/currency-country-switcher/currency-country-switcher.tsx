import { useState } from "react";
import cx from "classnames";
import styles from "./currency-country-switcher.module.css";
import Image from "next/image";
import Button from "../button/button";
import myFlag from "../../assets/countries/my.svg";
import Modal from "../modal/modal";
import useScrolling from "@/hooks/useScrolling";

interface CurrencyCountrySwitcherProps {}

export default function CurrencyCountrySwitcher({}: CurrencyCountrySwitcherProps) {
  const [modalType, setModalType] = useState<"currency" | "country" | "">("");

  const { isScrolling } = useScrolling();

  const handleOpenModal = (type: "currency" | "country" | "") => {
    setModalType(type);
  };

  return (
    <div className={cx(styles["root"], isScrolling && styles["scrolling"])}>
      <Button
        color={isScrolling ? "blue-4" : "white"}
        variant="text"
        onClick={() => handleOpenModal("currency")}
      >
        MYR
      </Button>
      <div className={cx(styles["separator"])}></div>
      <Button
        className={cx(styles["country"])}
        color={isScrolling ? "blue-4" : "white"}
        variant="text"
        onClick={() => handleOpenModal("country")}
      >
        <Image
          className={cx(styles["flag"])}
          src={myFlag}
          alt="my-flag"
          width={20}
          height={20}
        />
        <span>Malaysia</span>
      </Button>
      {modalType === "country" && (
        <Modal toggleModal={() => handleOpenModal("")} />
      )}
      {modalType === "currency" && (
        <Modal toggleModal={() => handleOpenModal("")} />
      )}
    </div>
  );
}
