import styles from "./BtnSymbol.module.css";

function BtnSymbol(props) {
  return (
    <button type={props.type} className={`${styles["btn-symbol"]} ${styles[props.style]}`}>
      →
    </button>
  );
}

export default BtnSymbol;
