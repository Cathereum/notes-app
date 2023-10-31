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
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text" id="" cols="30" rows="10"></textarea>
      <Button onClick={() => console.log("нажали")} text="Сохранить" />
    </form>
  );
}

export default JournalForm;
