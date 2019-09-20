import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

// Components
import Login from "./views/login/Login";
import Signup from "./views/signup/Signup";

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
      </Router>
    </ThemeProvider>
  );
}

export default App;
