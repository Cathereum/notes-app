import { useContext, useEffect, useReducer } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import { UserContext } from "../../context/user.context";

function JournalForm({ onSubmit, selectedItemData, onDelete }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isFormReadyToSubmit, values } = formState;
  const { userId } = useContext(UserContext);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: "CLEAR" });
      dispatchForm({
        type: "SET_VALUE",
        payload: { userId: userId },
      });
    }
  }, [isFormReadyToSubmit, values, onSubmit, userId]);

  useEffect(() => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  }, [userId]);

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

  useEffect(() => {
    dispatchForm({
      type: "SET_VALUE",
      payload: { ...selectedItemData },
    });
  }, [selectedItemData]);

  const deleteJournalItem = () => {
    onDelete(selectedItemData.id);
    dispatchForm({ type: "CLEAR" });
    dispatchForm({
      type: "SET_VALUE",
      payload: { userId: userId },
    });
  };

  return (
    <form
      className={styles["journal-form"]}
      action="submit"
      onSubmit={addJournalItem}
    >
      <span>Пользователь {userId}</span>
      <div className={styles["form-title-wrapper"]}>
        <input
          type="text"
          onChange={onChange}
          value={values.title}
          name="title"
          className={styles["form-title"]}
        />
        {selectedItemData.id && (
          <button onClick={deleteJournalItem} className={styles["delete-btn"]}>
            <img src="/deleteIcon.svg" alt="deleteIcon" />
          </button>
        )}
      </div>
      <div className={styles["form-input-wrapper"]}>
        <img src="/dateIcon.svg" alt="dateIcon" />
        <label htmlFor="date">Дата</label>
        <input
          type="date"
          onChange={onChange}
          value={
            values.date ? new Date(values.date).toISOString().slice(0, 10) : ""
          }
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
