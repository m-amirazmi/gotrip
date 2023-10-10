import cx from "classnames";
import styles from "./hero.module.css";
import Text from "../text/text";
import Container from "../container/container";
import Image from "next/image";
import Button from "../button/button";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <section className={cx(styles["root"])}>
      {/* Hero Title & Subtitle */}
      <Container>
        <div className={cx(styles["content"])}>
          <Text tag="h1" className={cx(styles["title"])}>
            <Text tag="span">Where Would</Text>
            <br />
            <Text tag="span">You Like To Go?</Text>
          </Text>
          <Text tag="p" className={cx(styles["subtitle"])}>
            Checkout Beautiful Places Arround the World.
          </Text>
        </div>
        {/* Hero Search */}
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
            <Text tag="span">Location</Text>
            <input placeholder="Where are you going?" />
          </div>
          <div className={cx(styles["input"])}>
            <Text tag="span">Check in - Check out</Text>
            <input placeholder="Wed 2 Mar - Fri 11 Apr" />
          </div>
          <div className={cx(styles["input"])}>
            <Text tag="span">Guest</Text>
            <input placeholder="2 adults - 1 children - 1 room" />
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
