import CardButton from "../CardButton/CardButton";
import "./NewJournalButton.css";

function NewJournalButton() {
  return (
    <CardButton className="journal-add">
      <img className="white-plus-svg" src="/white-plus.svg" alt="plus btn" />
      <span>Новое воспоминание</span>
    </CardButton>
  );
}

export default NewJournalButton;
