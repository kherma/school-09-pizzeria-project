import React, { useState } from "react";
import styles from "./Table.module.scss";
import BookingEventTabel from "../../features/BookingEventTabel/BookingEventTabel";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const demoBooking = [
  {
    table: "1",
    bookings: [
      { id: "123", type: "booking", name: "Anie", start: 12, end: 13 },
      { id: "234", type: "booking", name: "Sarah", start: 13.5, end: 14.5 },
      { id: "345", type: "booking", name: "Lauren", start: 15, end: 17 },
    ],
  },
  {
    table: "2",
    bookings: [
      { id: "456", type: "event", name: "Rachel", start: 12, end: 17 },
    ],
  },
  {
    table: "3",
    bookings: [
      { id: "567", type: "booking", name: "Megan", start: 13.5, end: 14.5 },
    ],
  },
];
const Table = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className={styles.component}>
      <div className={styles.inputGroup}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="center">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <BookingEventTabel data={demoBooking} />
    </div>
  );
};

export default Table;
