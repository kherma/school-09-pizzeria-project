import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BookingView.module.scss";

const BookingView = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>BookingView View</h2>
      <h3>{`LP. ${id}`}</h3>
    </div>
  );
};


export default BookingView;
