import cx from "classnames";
import Image from "next/image";
import CategoryTab, { ICategoryTabItem } from "../category-tab/category-tab";
import Container from "../container/container";
import Button from "../button/button";
import navIcon from "../../assets/nav-icon.webp";
import logo from "../../assets/logo.webp";
import myFlag from "../../assets/countries/my.svg";
import styles from "./header.module.css";

interface HeaderProps {
  categories: ICategoryTabItem[];
}

export default function Header({ categories }: HeaderProps) {
  return (
    <header className={cx(styles["root"])}>
      <Container>
        <div className={cx(styles["container"])}>
          {/* NAV ICON */}
          <Image src={navIcon} alt="nav-icon" width={25} height={12} />
          {/* LOGO */}
          <Image src={logo} alt="gotrip-logo" width={144} height={50} />
          {/* SEARCH */}
          {/* CURRENCY / COUNTRY */}
          <div className={cx(styles["currency-country"])}>
            <Button color="white" variant="text">
              MYR
            </Button>
            <div className={cx(styles["separator"])}></div>
            <Button
              className={cx(styles["country"])}
              color="white"
              variant="text"
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
          </div>
          {/* BUTTONS */}
          <div className={cx(styles["buttons"])}>
            <Button color="white">Become An Expert</Button>
            <Button color="white" variant="outline">
              Sign In / Register
            </Button>
          </div>
        </div>
      </Container>
      <Container>
        <CategoryTab
          items={categories}
          variant="ghost"
          showIcon
          size="medium"
        />
      </Container>
    </header>
  );
}
