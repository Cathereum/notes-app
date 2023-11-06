import styles from "./Logo.module.css";

function Logo({ logoImage }) {
  console.log("Рендер Logo");

  return <img className={styles.logo} src={logoImage} alt="Логотип журнала" />;
}

export default Logo;
