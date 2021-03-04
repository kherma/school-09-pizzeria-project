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

const renderActions = (status, id, order, func) => {
  switch (status) {
    case "free":
      return (
        <>
          <Button onClick={() => func(id, status, order)}>thinking</Button>
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
          <Button onClick={() => func(id, status, order)}>prepared</Button>
          <Button>canceled</Button>
        </>
      );
    case "prepared":
      return <Button onClick={() => func(id, status, order)}>delivered</Button>;
    case "delivered":
      return <Button onClick={() => func(id, status, order)}>paid</Button>;
    case "paid":
      return <Button onClick={() => func(id, status, order)}>free</Button>;
    default:
      return null;
  }
};

const OrderStatusTabel = (props) => {
  const { data, changeTableStatus } = props;
  const renderStatus = (id, status, order) => {
    switch (status) {
      case "free":
        status = "thinking";
        changeTableStatus(id, status, order);
        break;
      case "thinking":
        status = "ordered";
        changeTableStatus(id, status, order);
        break;
      case "ordered":
        status = "prepared";
        changeTableStatus(id, status, order);
        break;
      case "prepared":
        status = "delivered";
        changeTableStatus(id, status, order);
        break;
      case "delivered":
        status = "paid";
        changeTableStatus(id, status, order);
        break;
      case "paid":
        status = "free";
        changeTableStatus(id, status, order);
        break;
      default:
        return null;
    }
  };
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
              <TableCell>
                {renderActions(status, id, order, renderStatus)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

OrderStatusTabel.propTypes = {
  data: PropTypes.array,
  changeTableStatus: PropTypes.func,
};

export default OrderStatusTabel;
