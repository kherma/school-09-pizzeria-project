import React from "react";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const displayOrderInfo = (type, id, label) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body2">{label.toUpperCase()}</Typography>
      </TableCell>
      <TableCell>
        {!type.length > 0 ? (
          <Typography>--------</Typography>
        ) : (
          type.map(({ times, size, food }, index) => (
            <Typography
              key={id * index}
            >{`${times} x ${food}, ${size}`}</Typography>
          ))
        )}
      </TableCell>
    </TableRow>
  );
};

const KitchenOrderTabel = ({ data }) => {
  const { id, type, destination, starter, main, dessert } = data;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{type.toUpperCase()}</TableCell>
            <TableCell>{destination}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayOrderInfo(starter, id, "starter")}
          {displayOrderInfo(main, id, "main")}
          {displayOrderInfo(dessert, id, "dessert")}
          <TableRow>
            <TableCell>ACTION</TableCell>
            <TableCell align="center">
              <Button>ready</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

KitchenOrderTabel.propTypes = {
  data: PropTypes.object,
};

export default KitchenOrderTabel;
