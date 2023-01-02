import {
  Avatar,
  Button,
  Container,
  Grid,
  //   Icon,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Icon from "./Icon";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
const intialState = {
  FirstName: "",
  LastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [IsSingup, setIsSingup] = useState(false);
  const [formData, setformData] = useState(intialState);
  //   const IsSingup = false;
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (IsSingup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleShowPassword = () =>
    setshowPassword((prevShowPassword) => !prevShowPassword);

  const SwitchMood = () => {
    setIsSingup((prevIsSignup) => !prevIsSignup);
    setshowPassword(false);
  };
  // YOUR CLIEND ID = 915300106478-fj0k46ekat989j8qrabqc9s42fgufags.apps.googleusercontent.com
  // YOYR CLIEND SERVER = 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
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId:
          "915300106478-fj0k46ekat989j8qrabqc9s42fgufags.apps.googleusercontent.com",
      });
    });
  }, []);
  const googleSuccess = async (res) => {
    console.log(res);
    let result = res?.profileObj;
    let token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was UnSuccessfull. Try Again Later ");
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
          <GoogleLogin
            clientId="915300106478-fj0k46ekat989j8qrabqc9s42fgufags.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                fullWidth
                variant="contained"
                color="primary"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
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
