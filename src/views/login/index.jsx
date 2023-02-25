import { CircularProgress } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Components from "./Components";
import "./styles.css";

const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const [showLoader, setShowLoader] = React.useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSignUp = (data) => {
    if (
      data?.userName === "" ||
      data?.signupEmail === "" ||
      data?.signupPassword === ""
    ) {
      return;
    }
    sessionStorage.setItem("email", data.signupEmail);
    sessionStorage.setItem("password", data.signupPassword);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(true);
      navigate("/player-dashboard");
    }, 2000);
  };
  const onSignIn = (data) => {
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    if (email === data?.signInEmail && password === data?.signInPassword) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(true);
        navigate("/player-dashboard");
      }, 2000);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="Name"
            {...register("userName")}
            name="userName"
          />
          <Components.Input
            type="email"
            placeholder="Email"
            {...register("signupEmail")}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            {...register("signupPassword")}
          />
          <Components.Button onClick={handleSubmit(onSignUp)}>
            {showLoader ? (
              <CircularProgress style={{ width: "20px", height: "20px" }} />
            ) : (
              `Sign Up`
            )}
          </Components.Button>
        </Components.Form>
      </Components.SignUpContainer>
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            placeholder="Email"
            {...register("signInEmail")}
          />
          <Components.Input
            type="password"
            placeholder="Password"
            {...register("signInPassword")}
          />
          <Components.Anchor>Forgot your password?</Components.Anchor>
          <Components.Button onClick={handleSubmit(onSignIn)}>
            {showLoader ? (
              <CircularProgress style={{ width: "20px", height: "20px" }} />
            ) : (
              `Sign In`
            )}
          </Components.Button>
        </Components.Form>
      </Components.SignInContainer>
      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton
              onClick={() => {
                toggle(true);
              }}
            >
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default Login;
