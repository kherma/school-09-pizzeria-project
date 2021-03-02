import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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
      return (
        <>
          <Button>prepared</Button>
          <Button>canceled</Button>
        </>
      );
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

const OrderStatusTabel = ({ data }) => {
  return (
    <Paper>
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
          {data.map(({ id, lastChange, status, order }) => (
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

OrderStatusTabel.propTypes = {
  data: PropTypes.array,
};

export default OrderStatusTabel;
