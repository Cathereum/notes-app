import Button from "../Button/Button";
import styles from "./JournalForm.module.css";

function JournalForm({ onSubmit }) {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form
      className={styles["journal-form"]}
      action="submit"
      onSubmit={addJournalItem}
    >
      <div className={styles["form-title-wrapper"]}>
        <input type="text" name="title" className={styles["form-title"]} />
        <img src="/deleteIcon.svg" alt="deleteIcon" />
      </div>
      <div className={styles["form-input-wrapper"]}>
        <img src="/dateIcon.svg" alt="dateIcon" />
        <label htmlFor="date">Дата</label>
        <input type="date" name="date" id="date" />
      </div>
      <div className={styles["form-input-wrapper"]}>
        <img src="/folderIcon.svg" alt="folderIcon" />
        <label htmlFor="tag">Метки</label>
        <input type="text" name="tag" id="tag" />
      </div>
      <textarea
        className={styles["text-area"]}
        name="text"
        id=""
        cols="30"
        rows="10"
      />
      <div className={styles["form-button"]}>
        <Button onClick={() => console.log("нажали")} text="Сохранить" />
      </div>
    </form>
  );
}

export default JournalForm;
