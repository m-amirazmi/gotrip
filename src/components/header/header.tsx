"use client";

import cx from "classnames";
import Image from "next/image";
import ServiceTab, { IServiceTabItem } from "../service-tab/service-tab";
import Container from "../container/container";
import Button from "../button/button";
import navIcon from "../../assets/nav-icon.webp";
import logo from "../../assets/logo.webp";
import styles from "./header.module.css";
import CurrencyCountrySwitcher from "../currency-country-switcher/currency-country-switcher";
import Link from "next/link";
import useScrolling from "@/hooks/useScrolling";

export default function Header({ services }: HeaderProps) {
  const { isScrolling } = useScrolling();

  return (
    <header className={cx(styles["root"], isScrolling && styles["scrolling"])}>
      <Container>
        <div className={cx(styles["container"])}>
          <Image src={navIcon} alt="nav-icon" width={25} height={12} />
          <Link href="/">
            <Image src={logo} alt="gotrip-logo" width={144} height={50} />
          </Link>
          <CurrencyCountrySwitcher />
          <div className={cx(styles["buttons"])}>
            <Button
              color={!isScrolling ? "white" : "blue-4"}
              tag="a"
              href="/become-expert"
            >
              Become An Expert
            </Button>
            <Button
              color={!isScrolling ? "white" : "blue-4"}
              tag="a"
              variant="outline"
              href="/login"
            >
              Sign In / Register
            </Button>
          </div>
        </div>
      </Container>
      <div className={cx(isScrolling ? styles["hidden"] : styles["show"])}>
        <Container>
          <ServiceTab items={services} variant="ghost" showIcon size="medium" />
        </Container>
      </div>
    </header>
  );
}

interface HeaderProps {
  services: IServiceTabItem[];
}
