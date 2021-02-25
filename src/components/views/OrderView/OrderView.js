import React from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styles from "./OrderView.module.scss";

const OrderView = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>OrderView View</h2>
      <p>{`Order no. ${id}`}</p>
    </div>
  );
};

// OrderView.propTypes = {
// };

export default OrderView;
