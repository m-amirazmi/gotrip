import cx from "classnames";
import styles from "./hero.module.css";
import Text from "../text/text";
import Container from "../container/container";
import Image from "next/image";
import Button from "../button/button";

export default function Hero({ content }: HeroProps) {
  if (!content) return;

  return (
    <section className={cx(styles["root"])}>
      {/* Hero Title & Subtitle */}
      <Container>
        <div className={cx(styles["content"])}>
          <Text tag="h1" className={cx(styles["title"])}>
            {content.titleLine1 && (
              <Text tag="span" color="yellow">
                {content.titleLine1}
              </Text>
            )}
            <br />
            {content.titleLine2 && (
              <Text tag="span" color="white">
                {content.titleLine2}
              </Text>
            )}
          </Text>
          <Text color="white" tag="p" className={cx(styles["subtitle"])}>
            {content.subtitle}
          </Text>
        </div>
        <div className={cx(styles["images"])}>
          <Image
            src="https://imageupload.io/ib/D8pWEwti3nCPfUC_1696875653.webp"
            alt="hero-1.webp"
            width={410}
            height={500}
            className={cx(styles["image"])}
          />
          <div className={cx(styles["image-small"])}>
            <Image
              src="https://imageupload.io/ib/4CapgcuEhgz8cPj_1696875653.webp"
              alt="hero-2.webp"
              width={300}
              height={235}
              className={cx(styles["image"])}
            />
            <Image
              src="https://imageupload.io/ib/KmK56xModX8JdGv_1696875653.webp"
              alt="hero-4.webp"
              width={300}
              height={235}
              className={cx(styles["image"])}
            />
          </div>
        </div>
        <div className={cx(styles["search"])}>
          <div className={cx(styles["input"])}>
            <Text tag="span">{content.inputLabel1}</Text>
            <Button
              variant="text"
              color="grey-3"
              className={cx(styles["placeholder"])}
            >
              {content.inputPlaceholder1}
            </Button>
          </div>
          <div className={cx(styles["input"])}>
            <Text tag="span">{content.inputLabel2}</Text>
            <Button
              variant="text"
              color="grey-3"
              className={cx(styles["placeholder"])}
            >
              {content.inputPlaceholder2}
            </Button>
          </div>
          <div className={cx(styles["input"])}>
            <Text tag="span">{content.inputLabel3}</Text>
            <Button
              variant="text"
              color="grey-3"
              className={cx(styles["placeholder"])}
            >
              {content.inputPlaceholder3}
            </Button>
          </div>
          <Button color="yellow" size="large">
            Search
          </Button>
        </div>
      </Container>
      <div className={cx(styles["bg"])}></div>
    </section>
  );
}

interface HeroProps {
  content: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    inputPlaceholder1: string;
    inputLabel1: string;
    inputPlaceholder2: string;
    inputLabel2: string;
    inputPlaceholder3: string;
    inputLabel3: string;
  };
}
