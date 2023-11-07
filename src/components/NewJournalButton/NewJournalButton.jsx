import CardButton from "../CardButton/CardButton";
import styles from "./NewJournalButton.module.css";

function NewJournalButton({ clearFormData }) {
  return (
    <CardButton onClick={clearFormData} className={styles["journal-add"]}>
      <img
        className={styles["white-plus-svg"]}
        src="/white-plus.svg"
        alt="plus btn"
      />
      <span>Новое воспоминание</span>
    </CardButton>
  );
}

export default NewJournalButton;
