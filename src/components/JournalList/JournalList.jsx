import { useContext, useMemo } from "react";
import CardButton from "../CardButton/CardButton";
import JournalItem from "../JournalItem/JournalItem";
import styles from "../JournalList/JournalList.module.css";
import { UserContext } from "../../context/user.context";

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);
  const sortElement = (a, b) => {
    if (a.date > b.date) {
      return -1;
    } else {
      return 1;
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((el) => el.userId === userId).sort(sortElement);
  }, [items, userId]);

  return (
    <div className={styles["journal-list"]}>
      {items.length === 0 && <p>записей пока нет</p>}
      {items.length > 0 &&
        filteredItems.map((el) => (
          <CardButton key={el.id} onClick={() => setItem(el)}>
            <JournalItem title={el.title} text={el.text} date={el.date} />
          </CardButton>
        ))}
    </div>
  );
}

export default JournalList;
