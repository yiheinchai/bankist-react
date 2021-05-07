import CardAction from "../UI/CardAction";
import styles from "./Actions.module.css";

function Actions(props) {
  return (
    <div className={`${styles.actions} ${props.className}`}>
      <CardAction
        onFormSubmit={props.formHandlers[0]}
        inputs={["Transfer To", "Amount"]}
        title="Transfer Money"
        color="orange"
      />
      <CardAction
        onFormSubmit={props.formHandlers[1]}
        inputs={["Amount"]}
        title="Request Loan"
        color="green"
      />
      <CardAction
        onFormSubmit={props.formHandlers[2]}
        inputs={["Confirm User", "Confirm PIN"]}
        title="Close account"
        color="red"
      />
    </div>
  );
}

export default Actions;
