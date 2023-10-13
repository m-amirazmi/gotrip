import cx from "classnames";
import styles from "./usp.module.css";
import { IImage } from "@/utils/types";
import Container from "../container/container";
import Column from "../column/column";
import Card from "../card/card";

export default function Usp({ content }: UspProps) {
  return (
    <div className={cx(styles["root"])}>
      <Container>
        <Column columnNo={3} gap="md">
          {content.map((i, k) => (
            <Card
              key={k}
              image={i.image}
              title={i.title}
              description={i.description}
            />
          ))}
        </Column>
      </Container>
    </div>
  );
}

interface UspProps {
  content: {
    image: IImage;
    title: string;
    description: string;
    shadow?: boolean;
  }[];
}
