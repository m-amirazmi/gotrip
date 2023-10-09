import cx from "classnames";
import styles from "./header.module.css";
import Container from "../container/container";
import Image from "next/image";
import navIcon from "../../assets/nav-icon.webp";
import logo from "../../assets/logo.webp";
import CategoryTab, { ICategoryTabItem } from "../category-tab/category-tab";

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
          {/* BUTTONS */}
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
