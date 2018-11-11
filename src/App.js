import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
import "typeface-roboto";
import "./App.css";

import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <Header />
          <Typography variant="display1" align="center" gutterBottom>
            cloudrunr
          </Typography>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
