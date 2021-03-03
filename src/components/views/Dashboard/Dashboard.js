import React from "react";
import styles from "./Dashboard.module.scss";
import OrderStatusTabel from "../../features/OrderStatusTabel/OrderStatusTabel";
import RemoteOrderTabel from "../../features/RemoteOrderTabel/RemoteOrderTabel";
import BookingEventTabel from "../../features/BookingEventTabel/BookingEventTabel";

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
        <OrderStatusTabel data={demoLocal} />
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
