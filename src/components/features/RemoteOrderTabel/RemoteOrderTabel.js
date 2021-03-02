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
    case "ordered":
      return <Button>ready</Button>;
    case "ready":
      return <Button>in delivery</Button>;

    case "in delivery":
      return <Button>done</Button>;
    default:
      return null;
  }
};

const RemoteOrderTabel = ({ data }) => {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>Last Change</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Order</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, address, lastChange, status, order }) => (
            <TableRow key={id}>
              <TableCell>{address}</TableCell>
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
                {renderActions(status)}
                <Button>canceled</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

RemoteOrderTabel.propTypes = {
  data: PropTypes.array,
};

export default RemoteOrderTabel;
