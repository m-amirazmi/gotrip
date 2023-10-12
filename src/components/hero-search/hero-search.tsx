import cx from "classnames";
import styles from "./hero-search.module.css";
import Text from "@/components/text/text";
import Button from "@/components/button/button";

export default function HeroSearch({ content }: HeroSearchProps) {
  return (
    <div className={cx(styles["root"])}>
      {content.inputs.map((i, k) => {
        return (
          <div key={k} className={cx(styles["input"])}>
            <Text tag="span">{i.label}</Text>
            <Button
              variant="text"
              color="grey-3"
              className={cx(styles["placeholder"])}
            >
              {i.placeholder}
            </Button>
          </div>
        );
      })}
      <Button color="yellow" size="large">
        {content.button.label}
      </Button>
    </div>
  );
}

interface HeroSearchProps {
  content: {
    inputs: IHeroSearchInput[];
    button: {
      label: string;
    };
  };
}

export interface IHeroSearchInput {
  label: string;
  placeholder: string;
  id: string;
}
