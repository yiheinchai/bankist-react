import styles from "./Label.module.css";
const Label = (props) => {
  return <label className={styles["action__label"]} children={props.children}></label>;
};

export default Label;
