import React, { useState } from "react";
// import PropTypes from "prop-types";
import styles from "./Waiter.module.scss";
import { Link } from "react-router-dom";

const Waiter = () => {
  const [orderID, setOrderID] = useState("123abc");
  return (
    <div className={styles.component}>
      <h2>Waiter View</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${orderID}`}>
        {`Order no.${orderID}`}
      </Link>
    </div>
  );
};

// Waiter.propTypes = {};

export default Waiter;
