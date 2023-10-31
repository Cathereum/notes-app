import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import styles from "../JournalList/JournalList.module.css";

function JournalList({ items }) {
  const sortElement = (a, b) => {
    if (a.date > b.date) {
      return -1;
    } else {
      return 1;
    }
  };

  return (
    <div className={styles["journal-list"]}>
      {items.length === 0 && <p>записей пока нет</p>}
      {items.length > 0 &&
        items.sort(sortElement).map((el) => (
          <CardButton key={el.id}>
            <JournalItem title={el.title} text={el.text} date={el.date} />
          </CardButton>
        ))}
    </div>
  );
}

export default JournalList;
