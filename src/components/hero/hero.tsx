import cx from "classnames";
import styles from "./hero.module.css";
import Container from "../container/container";
import HeroSearch, { IHeroSearchInput } from "../hero-search/hero-search";
import HeroImages, { IHeroImage } from "../hero-images/hero-images";
import HeroTitle from "../hero-title/hero-title";

export default function Hero({ content }: HeroProps) {
  if (!content) return;

  return (
    <section className={cx(styles["root"])}>
      {/* Hero Title & Subtitle */}
      <Container>
        <HeroTitle content={content["hero-title"]} />
        <HeroImages content={content["hero-images"]} />
        <HeroSearch content={content["hero-search"]} />
      </Container>
      <div className={cx(styles["bg"])}></div>
    </section>
  );
}

interface HeroProps {
  content: {
    "hero-title": {
      "title-line-1": string;
      "title-line-2": string;
      subtitle: string;
    };
    "hero-search": {
      inputs: IHeroSearchInput[];
      button: {
        label: string;
      };
    };
    "hero-images": {
      main: IHeroImage;
      sub: IHeroImage[];
    };
  };
}
