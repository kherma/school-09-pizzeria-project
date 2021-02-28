import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EventView.module.scss";

const EventView = () => {
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>EventView View</h2>
      <h3>{`LP. ${id}`}</h3>
    </div>
  );
};

export default EventView;
