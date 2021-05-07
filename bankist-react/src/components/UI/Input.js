import styles from "./Input.module.css";
import Label from "./Label";

function Input(props) {
  const onInputChangeHandler = (event) => {
    props.onInputChangeHandler(event.target.value);
  };

  return (
    <div className={styles["input__group"]}>
      <input
        value={props.value}
        className={`${styles["input"]} ${styles[props.size]}`}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        onChange={onInputChangeHandler}
      />
      {props.label && <Label children={props.label} />}
    </div>
  );
}

export default Input;
