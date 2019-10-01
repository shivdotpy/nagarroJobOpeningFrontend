import React, { useState } from "react";
import {
  CardContent,
  Card,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";
import nagarroBanner from "../../assets/nagarroBanner.png";
import Axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Alert from "react-s-alert";

const Login = props => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [buttonState, setButtonState] = useState(false);

  const handleLogin = () => {
    setButtonState(true);
    const validated = checkValidation();
    if (!validated) return;
    Axios.post("https://nagarro-openings.herokuapp.com/user/login", {
      email,
      password
    })
      .then(response => {
        setButtonState(false);
        Alert.success(response.data.message, {
          position: "top-right",
          effect: "bouncyflip",
          onShow: function() {
            props.history.push("/dashboard");
          },
          timeout: 2000
        });
      })
      .catch(error => {
        setButtonState(false);
        Alert.error(error.response.data.message, {
          position: "top-right",
          effect: "bouncyflip",
          onShow: function() {
            console.log("aye!");
          },
          timeout: 2000
        });
      });
  };

  const handleSignup = () => {
    setButtonState(true);
    const validated = checkValidation();
    if (!validated) return;
    Axios.post("https://nagarro-openings.herokuapp.com/user/signup", {
      email,
      password
    })
      .then(response => {
        setButtonState(false);
        // props.history.push("/dashboard");
        Alert.success(response.data.message, {
          position: "top-right",
          effect: "bouncyflip",
          onShow: function() {
            console.log("aye!");
          },
          beep: false,
          timeout: 2000
        });
      })
      .catch(error => {
        setButtonState(false);
        Alert.error(error.response.data.message, {
          position: "top-right",
          effect: "bouncyflip",
          onShow: function() {
            console.log("aye!");
          },
          beep: false,
          timeout: 2000
        });
      });
  };

  const checkValidation = () => {
    if (!email) {
      setEmailError("Email required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
      setEmailError("Please use valid email address");
    }

    if (!password) {
      setPasswordError("Password required");
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
    ) {
      setPasswordError("Please use strong password");
    }
    if (email && password) {
      return true;
    }
    setButtonState(false);
    return false;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "8%"
      }}
    >
      <Card style={{ maxWidth: "400px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <img src={nagarroBanner} alt="nagarro logo" />
        </div>

        <CardContent>
          <TextField
            id="standard-name"
            label="Email"
            name="email"
            helperText={emailError}
            fullWidth={true}
            value={email}
            error={emailError ? true : false}
            onChange={e => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            margin="normal"
          />
          <TextField
            id="standard-password"
            label="Password"
            type="password"
            name="password"
            fullWidth={true}
            value={password}
            error={passwordError ? true : false}
            helperText={passwordError}
            onChange={e => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
          />
        </CardContent>
        <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleLogin}
            disabled={buttonState}
          >
            <PersonIcon /> Login
          </Button>

          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={handleSignup}
            disabled={buttonState}
          >
            <PersonAddIcon /> Signup
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Login;
