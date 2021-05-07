import BtnSymbol from "../UI/BtnSymbol";
import styles from "./CardAction.module.css";
import { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const CardAction = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function inputHandler1(input) {
    console.log(input);
    setInput1(input);
  }
  function inputHandler2(input) {
    console.log(input);
    setInput2(input);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (input1 && input2) {
      props.onFormSubmit(input1, input2);
    }

    if (input1 && !input2) {
      props.onFormSubmit(input1);
    }
  }

  const handlerArray = [inputHandler1, inputHandler2];

  function generateForm() {
    return props.inputs.map((field, i) => {
      return (
        <Input label={field} onInputChangeHandler={handlerArray[i]} size="small" type="text" />
      );
    });
  }

  return (
    <div className={`${styles["action__card"]} ${styles[props.color]}`}>
      <div className={styles["action__title"]}>{props.title}</div>
      <form onSubmit={onFormSubmit} className={styles["action__form"]}>
        {generateForm()}
        <BtnSymbol type="submit" style="white-curved" />
      </form>
    </div>
  );
};

export default CardAction;
