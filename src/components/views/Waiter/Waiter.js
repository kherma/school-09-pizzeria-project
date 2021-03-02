import React from "react";
import styles from "./Waiter.module.scss";
import OrderStatusTabel from "../../features/OrderStatusTabel/OrderStatusTabel";

const demoContent = [
  { id: "1", lastChange: "12", status: "free", order: null },
  { id: "2", lastChange: "9", status: "thinking", order: null },
  { id: "3", lastChange: "5", status: "ordered", order: 123 },
  { id: "4", lastChange: "20", status: "prepared", order: 234 },
  { id: "5", lastChange: "3", status: "delivered", order: 345 },
  { id: "6", lastChange: "11", status: "paid", order: 456 },
];

const Waiter = () => {
  return (
    <div className={styles.component}>
      <OrderStatusTabel data={demoContent} />
    </div>
  );
};

export default Waiter;
