import styles from "./LeftPannel.module.css";

function LeftPannel({ children }) {
  return <div className={styles["left-pannel"]}>{children}</div>;
}

export default LeftPannel;
