import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.scss";
// import PropTypes from 'prop-types'

const PageNav = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
        Login
      </NavLink>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
        Home
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
        Table
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName="active">
        Waiter
      </NavLink>
      <NavLink
        to={`${process.env.PUBLIC_URL}/kitchen`}
        activeClassName="active"
      >
        Kitchen
      </NavLink>
    </nav>
  );
};

// PageNav.propTypes = {
// }

export default PageNav;
