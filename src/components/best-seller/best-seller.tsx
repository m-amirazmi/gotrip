import cx from "classnames";
import styles from "./best-seller.module.css";
import Title from "../title/title";
import Container from "../container/container";

export default function BestSeller({}: BestSellerProps) {
  return (
    <div className={cx(styles["root"])}>
      <Container>
        <Title
          title="Best Seller"
          subtitle="Interdum et malesuada fames ac ante ipsum"
        />
      </Container>
    </div>
  );
}

interface BestSellerProps {}
