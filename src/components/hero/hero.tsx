import cx from "classnames";
import styles from "./hero.module.css";
import Image from "next/image";
import bg from "../../assets/hero-bg.webp";
import CategoryTab, { ICategoryTabItem } from "../category-tab/category-tab";
import Container from "../container/container";

interface HeroProps {
  categories: ICategoryTabItem[];
}

export default function Hero({ categories }: HeroProps) {
  return (
    <section className={cx(styles["root"])}>
      {/* Category Tabs */}
      <div className={cx(styles["categories"])}>
        <Container>
          <CategoryTab
            items={categories}
            variant="ghost"
            showIcon
            size="medium"
          />
        </Container>
      </div>
      {/* Hero Title & Subtitle */}
      {/* Hero Search */}
      {/* Hero Image Grid */}
      <div className={cx(styles["bg"])}></div>
    </section>
  );
}
