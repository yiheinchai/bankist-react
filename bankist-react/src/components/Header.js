import styles from "./Header.module.css";
import FormLogin from "./UI_Block/FormLogin";

const Header = (props) => {
  function onSubmitHandler(userInput, pinInput) {
    props.onSubmitHandler(userInput, pinInput);
  }
  return (
    <div className={styles.header}>
      <div className={styles["header__greet"]}>
        {props.loginValid && `Good Day, ${props.loginUser.split(" ").slice(0, 1)}!`}
        {!props.loginValid && "Log in to get started"}
      </div>
      <img className={styles["header__logo"]} src="https://bankist.netlify.app/logo.png" />
      <FormLogin onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default Header;
