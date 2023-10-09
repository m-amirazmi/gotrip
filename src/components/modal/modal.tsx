import cx from "classnames";
import styles from "./modal.module.css";

interface ModalProps {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: ModalProps) {
  return (
    <div className={cx(styles["root"])}>
      <div className={cx(styles["modal"])}>This is modal content</div>
      <div className={cx(styles["backdrop"])} onClick={toggleModal}></div>
    </div>
  );
}
