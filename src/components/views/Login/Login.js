import React from "react";
import styles from "./Login.module.scss";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      Pizzeria Project {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Login = () => {
  return (
    <Container className={styles.component} component="main" maxWidth="xs">
      <div className={styles.paper}>
        <Avatar className={styles.avatar} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={styles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            component={Link}
            to={`${process.env.PUBLIC_URL}/dashboard`}
            fullWidth
            variant="contained"
            color="primary"
            className={styles.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
