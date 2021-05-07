import styles from "./Bank.module.css";
import Balance from "./Balance";
import Actions from "./Actions";

const Bank = (props) => {
  return (
    <div className={styles.bank}>
      <Balance className={styles["bank__balance"]} />
      <div className={styles["bank__movements"]}>Movements</div>
      <Actions formHandlers={props.formHandlers} className={styles["bank__actions"]}></Actions>
    </div>
  );
};

export default Bank;
