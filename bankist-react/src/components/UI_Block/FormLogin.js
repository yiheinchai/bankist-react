import { useState } from "react";
import Input from "../UI/Input";
import BtnSymbol from "../UI/BtnSymbol";
import styles from "./FormLogin.module.css";

const FormLogin = (props) => {
  const [userInput, setUserInput] = useState("");
  const [pinInput, setPinInput] = useState("");

  function onUserChangeHandler(inputValue) {
    console.log(`User: ${inputValue}`);
    setUserInput(inputValue);
  }
  function onPasswordChangeHandler(inputValue) {
    if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, 4);
    }
    setPinInput(inputValue);
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    props.onSubmitHandler(userInput, pinInput);
  }

  return (
    <form className={styles.login} onSubmit={onSubmitHandler}>
      <Input
        onInputChangeHandler={onUserChangeHandler}
        value={userInput}
        placeholder="user"
        size="large"
        type="text"
      />
      <Input
        onInputChangeHandler={onPasswordChangeHandler}
        value={pinInput}
        placeholder="pin"
        size="large"
        type="number"
      />
      <BtnSymbol type="submit" />
    </form>
  );
};

export default FormLogin;
