import cx from "classnames";
import styles from "./popular-destination.module.css";
import Container from "../container/container";
import Title from "../title/title";

export default function PopularDestination({
  content,
}: PopularDestinationProps) {
  return (
    <div className={cx(styles["root"])}>
      <Container>
        <Title title={content.title} subtitle={content.subtitle} />
      </Container>
    </div>
  );
}

interface PopularDestinationProps {
  content: {
    title: string;
    subtitle: string;
  };
}
