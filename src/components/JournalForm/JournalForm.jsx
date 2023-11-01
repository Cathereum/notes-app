import { useEffect, useReducer } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit]);

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  const onChange = (e) => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <form
      className={styles["journal-form"]}
      action="submit"
      onSubmit={addJournalItem}
    >
      <div className={styles["form-title-wrapper"]}>
        <input
          type="text"
          onChange={onChange}
          value={values.title}
          name="title"
          className={styles["form-title"]}
        />
        <img src="/deleteIcon.svg" alt="deleteIcon" />
      </div>
      <div className={styles["form-input-wrapper"]}>
        <img src="/dateIcon.svg" alt="dateIcon" />
        <label htmlFor="date">Дата</label>
        <input
          type="date"
          onChange={onChange}
          value={values.date}
          name="date"
          id="date"
        />
      </div>
      <div className={styles["form-input-wrapper"]}>
        <img src="/folderIcon.svg" alt="folderIcon" />
        <label htmlFor="tag">Метки</label>
        <input
          type="text"
          onChange={onChange}
          value={values.tag}
          name="tag"
          id="tag"
        />
      </div>
      <textarea
        className={styles["text-area"]}
        name="text"
        onChange={onChange}
        value={values.text}
        id=""
        cols="30"
        rows="10"
      />
      <div className={styles["form-button"]}>
        <Button text="Сохранить" />
      </div>
    </form>
  );
}

export default JournalForm;
