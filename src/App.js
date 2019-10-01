import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/genie.css";
import "react-s-alert/dist/s-alert-css-effects/bouncyflip.css";

// Components
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";
import Dashboard from "./views/dashboard/Dashboard";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#E6A13A" },
    secondary: { main: "#010101" }
  },
  status: {
    danger: "orange"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dashboard" exatc component={Dashboard} />
      </Router>
      <Alert stack={{ limit: 1 }} />
    </ThemeProvider>
  );
}

export default App;
