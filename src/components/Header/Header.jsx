import { useCallback, useState } from "react";
import Button from "../Button/Button";
import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";

const logo = ["/logo.svg", "/vite.svg"];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  const toggleLogo = useCallback(() => {
    setLogoIndex((prev) => Number(!prev));
  }, []);

  console.log("Рендер Header");
  return (
    <>
      <Logo logoImage={logo[0]} />
      <SelectUser />
      <Button onClick={toggleLogo} text="Сменить Лого" />
    </>
  );
}

export default Header;
