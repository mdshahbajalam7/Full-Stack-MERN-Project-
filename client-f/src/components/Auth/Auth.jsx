import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { useState } from "react";

function Auth() {
  const classes = useStyles();
  const [showPassword, setshowPassword] = useState(false);
  const [IsSingup,setIsSingup]=useState(false)
//   const IsSingup = false;
  const handleChange = () => {};
  const handleSubmit = () => {};
  const handleShowPassword = () =>
    setshowPassword((prevShowPassword) => !prevShowPassword);

  const SwitchMood = () => {
    setIsSingup((prevIsSignup)=>!prevIsSignup)
    setshowPassword(false)
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{IsSingup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {IsSingup && (
              <>
                <Input
                  name="FirstName"
                  label="First Name"
                  handleChange={handleChange}
                  half
                  autoFocus
                />
                <Input
                  name="LastName"
                  label="Last Name"
                  handleChange={handleChange}
                  //   onChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}

            <Input
              type="email"
              name="email"
              label="Email Address"
              handleChange={handleChange}
            />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {IsSingup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {IsSingup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={SwitchMood}>
                {IsSingup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
