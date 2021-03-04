import React, { useEffect } from "react";
import PropTypes from "prop-types";
import OrderStatusTable from "../../features/OrderStatusTabel/OrderStatusTabel";
import styles from "./Waiter.module.scss";
import Paper from "@material-ui/core/Paper";

const Waiter = (props) => {
  const {
    loading: { active, error },
    tables,
    changeTableStatus,
  } = props;

  useEffect(() => {
    const { fetchTables } = props;
    fetchTables();
  }, []);

  if (active || !tables.length) {
    return (
      <Paper className={styles.component}>
        <p>Loading...</p>
      </Paper>
    );
  } else if (error) {
    return (
      <Paper className={styles.component}>
        <p>Error! Details:</p>
        <pre>{error}</pre>
      </Paper>
    );
  } else {
    return (
      <div className={styles.component}>
        <OrderStatusTable data={tables} changeTableStatus={changeTableStatus} />
      </div>
    );
  }
};

Waiter.propTypes = {
  fetchTables: PropTypes.func,
  tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  loading: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
};

export default Waiter;
