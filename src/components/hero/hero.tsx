import cx from "classnames";
import styles from "./hero.module.css";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className={cx(styles["root"])}>
      {/* Category Tabs */}
      {/* Hero Title & Subtitle */}
      {/* Hero Search */}
      {/* Hero Image Grid */}
      <div className={cx(styles["bg"])}></div>
    </section>
  );
}
