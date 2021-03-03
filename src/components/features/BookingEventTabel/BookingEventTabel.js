import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const numberToHour = (hour) => {
  return Number.isInteger(hour)
    ? `${hour}:00`
    : `${hour.toString().slice(0, 2)}:30`;
};

const validateCellData = (hour, bookings) => {
  for (let booking of bookings) {
    if (hour >= booking.start && hour <= booking.end) {
      return { text: booking.name, id: booking.id, type: booking.type };
    }
  }
  return null;
};

const createData = (tableBooking) => {
  const data = [];
  for (let hour = 12; hour <= 22; hour += 0.5) {
    data.push({
      time: numberToHour(hour),
      cells: [
        ...tableBooking.map(({ bookings }) => validateCellData(hour, bookings)),
      ],
    });
  }
  return data;
};

const BookingEventTabel = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [rows, setRows] = useState(createData(data));

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>HOUR</TableCell>
            {data.map(({ table }) => (
              <TableCell key={table}>TABLE {table}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ time, cells }) => (
            <TableRow key={time}>
              <TableCell>{time}</TableCell>
              {cells.map((cell, index) => (
                <TableCell key={index}>
                  {cell ? (
                    <Button
                      component={Link}
                      to={`${process.env.PUBLIC_URL}/tables/${cell.type}/${cell.id}`}
                    >
                      {`${cell.text} (${cell.type})`}
                    </Button>
                  ) : (
                    cell
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

BookingEventTabel.propTypes = {
  data: PropTypes.array,
};

export default BookingEventTabel;
