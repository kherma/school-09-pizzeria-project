// Base
import React from "react";
import styles from "./Waiter.module.scss";
import { Link } from "react-router-dom";
// Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const demoContent = [
  { id: "1", lastChange: "12", status: "free", order: null },
  { id: "2", lastChange: "9", status: "thinking", order: null },
  { id: "3", lastChange: "5", status: "ordered", order: 123 },
  { id: "4", lastChange: "20", status: "prepared", order: 234 },
  { id: "5", lastChange: "3", status: "delivered", order: 345 },
  { id: "6", lastChange: "11", status: "paid", order: 456 },
];

const renderActions = (status) => {
  switch (status) {
    case "free":
      return (
        <>
          <Button>thinking</Button>
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/waiter/order/new`}
          >
            new order
          </Button>
        </>
      );
    case "thinking":
      return (
        <Button
          component={Link}
          to={`${process.env.PUBLIC_URL}/waiter/order/new`}
        >
          new order
        </Button>
      );
    case "ordered":
      return <Button>prepared</Button>;
    case "prepared":
      return <Button>delivered</Button>;
    case "delivered":
      return <Button>paid</Button>;
    case "paid":
      return <Button>free</Button>;
    default:
      return null;
  }
};

const Waiter = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell>Last Change</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(({ id, lastChange, status, order }) => (
            <TableRow key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{lastChange} min.</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell>
                {order && (
                  <Button
                    component={Link}
                    to={`${process.env.PUBLIC_URL}/waiter/order/${order}`}
                  >
                    {order}
                  </Button>
                )}
              </TableCell>
              <TableCell>{renderActions(status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Waiter;
