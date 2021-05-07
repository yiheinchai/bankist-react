import styles from "./Balance.module.css";

const Balance = (props) => {
  return (
    <div className={`${styles.balance} ${props.className}`}>
      <div className={styles["balance__info"]}>
        <div className={styles["balance__title"]}>Current Balance</div>
        <div className={styles["balance__date"]}>As of 07/05/2021</div>
      </div>
      <div className={styles["balance__value"]}>$25,302</div>
    </div>
  );
};

export default Balance;
