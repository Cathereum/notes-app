import { useState } from "react";
import Button from "../Button/Button";
import SelectUser from "../SelectUser/SelectUser";
import styles from "./Header.module.css";

const logo = ["/logo.svg", "/vite.svg"];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  const toggleLogo = () => {
    setLogoIndex((prev) => Number(!prev));
  };

  console.log(logoIndex);
  return (
    <>
      <img
        className={styles.logo}
        src={logo[logoIndex]}
        alt="Логотип журнала"
      />
      <SelectUser />
      <Button onClick={toggleLogo} text="Сменить Лого" />
    </>
  );
}

export default Header;
