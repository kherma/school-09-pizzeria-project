import React, { useState } from "react";
// import PropTypes from "prop-types";
import styles from "./Table.module.scss";
import { Link } from "react-router-dom";

const Table = () => {
  const [bookingID, setBookingID] = useState("123abc");
  const [eventID, setEventID] = useState("123def");
  return (
    <div className={styles.component}>
      <h2>Table View</h2>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        New Booking
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/${bookingID}`}>
        {`Booking no.${bookingID}`}
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/new`}>New Event</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/event/${eventID}`}>
        {`Event no.${eventID}`}
      </Link>
    </div>
  );
};

// Table.propTypes = {};

export default Table;
