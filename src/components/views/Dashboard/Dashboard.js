import React from "react";
import styles from "./Dashboard.module.scss";
import OrderStatusTabel from "../../features/OrderStatusTabel/OrderStatusTabel";
import RemoteOrderTabel from "../../features/RemoteOrderTabel/RemoteOrderTabel";

const demoLocal = [
  { id: "1", lastChange: "12", status: "free", order: null },
  { id: "2", lastChange: "9", status: "thinking", order: null },
  { id: "3", lastChange: "5", status: "ordered", order: 123 },
  { id: "4", lastChange: "20", status: "prepared", order: 234 },
  { id: "5", lastChange: "3", status: "delivered", order: 345 },
  { id: "6", lastChange: "11", status: "paid", order: 456 },
];

const demoRemote = [
  {
    id: "remote-1",
    address: "st. Avenue 24, Oxford",
    lastChange: "5",
    status: "ordered",
    order: 567,
  },
  {
    id: "remote-2",
    address: "st. George 7, Wallingford",
    lastChange: "11",
    status: "ready",
    order: 678,
  },
  {
    id: "remote-3",
    address: "st. Clumbs 147, Reading",
    lastChange: "23",
    status: "in delivery",
    order: 789,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className={styles.component}>
        <OrderStatusTabel data={demoLocal} />
      </div>
      <div className={styles.component}>
        <RemoteOrderTabel data={demoRemote} />
      </div>
    </>
  );
};

export default Dashboard;
