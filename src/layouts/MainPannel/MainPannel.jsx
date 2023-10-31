import styles from "./MainPannel.module.css";

function MainPannel({ children }) {
  return <div className={styles["main-pannel"]}>{children}</div>;
}

export default MainPannel;
