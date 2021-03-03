import React from "react";
import styles from "./Table.module.scss";
import BookingEventTabel from "../../features/BookingEventTabel/BookingEventTabel";

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
const Table = () => {
  return (
    <div className={styles.component}>
      <div className={styles.inputGroup}>
        <input type="date" id="bookingDate" name="bookingDate" />
        <input type="time" id="bookingTime" name="bookingTime" />
      </div>
      <BookingEventTabel data={demoBooking} />
    </div>
  );
};

export default Table;
