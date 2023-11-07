import styles from "./CardButton.module.css";

function CardButton({ children, className, onClick }) {
  const cl = styles["card-button"] + (className ? " " + className : "");

  return (
    <button onClick={onClick} className={cl}>
      {children}
    </button>
  );
}

export default CardButton;
