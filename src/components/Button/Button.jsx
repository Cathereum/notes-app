import { memo } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

function Button({ text, onClick }) {
  console.log("Рендер Button");
  return (
    <button className={cn(styles.button, styles.accent)} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
