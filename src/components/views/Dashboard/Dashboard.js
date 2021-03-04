import React from "react";
import styles from "./Dashboard.module.scss";
import Waiter from "../Waiter/WaiterContainer";
import RemoteOrderTabel from "../../features/RemoteOrderTabel/RemoteOrderTabel";
import BookingEventTabel from "../../features/BookingEventTabel/BookingEventTabel";

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

const demoBooking = [
  {
    table: "1",
    bookings: [
      { id: "123", type: "booking", name: "Anie", start: 12, end: 13 },
      { id: "234", type: "booking", name: "Sarah", start: 13.5, end: 14.5 },
      { id: "345", type: "booking", name: "Lauren", start: 15, end: 17 },
    ],
  },
  {
    table: "2",
    bookings: [
      { id: "456", type: "event", name: "Rachel", start: 12, end: 17 },
    ],
  },
  {
    table: "3",
    bookings: [
      { id: "567", type: "booking", name: "Megan", start: 13.5, end: 14.5 },
    ],
  },
];

const Dashboard = () => {
  return (
    <>
      <div className={styles.component}>
        <Waiter />
      </div>
      <div className={styles.component}>
        <RemoteOrderTabel data={demoRemote} />
      </div>
      <div className={styles.component}>
        <BookingEventTabel data={demoBooking} />
      </div>
    </>
  );
};

export default Dashboard;
