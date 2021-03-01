import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import { StylesProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// General
import Login from "./components/views/Login/Login";
import Dashboard from "./components/views/Dashboard/Dashboard";
// Table related
import Table from "./components/views/Table/Table";
import BookingNew from "./components/views/BookingNew/BookingNew";
import BookingView from "./components/views/BookingView/BookingView";
import EventNew from "./components/views/EventNew/EventNew";
import EventView from "./components/views/EventView/EventView";
// Waiter related
import Waiter from "./components/views/Waiter/Waiter";
import OrderNew from "./components/views/OrderNew/OrderNew";
import OrderView from "./components/views/OrderView/OrderView";
// Kitchen related
import Kitchen from "./components/views/Kitchen/Kitchen";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2b4c6f",
    },
  },
});

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`}>
                  <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                </Route>
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/login`}
                  component={Login}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/dashboard`}
                  component={Dashboard}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables`}
                  component={Table}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/booking/new`}
                  component={BookingNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/booking/:id`}
                  component={BookingView}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/event/new`}
                  component={EventNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/tables/event/:id`}
                  component={EventView}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter`}
                  component={Waiter}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                  component={OrderNew}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/waiter/order/:id`}
                  component={OrderView}
                  data={{ numberLP: "123abc" }}
                />
                <Route
                  exact
                  path={`${process.env.PUBLIC_URL}/kitchen`}
                  component={Kitchen}
                />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
