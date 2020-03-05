import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import routes from "./routes.js";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';




function App() {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: amber
    },
    status: {
      danger: 'orange'
    }
  });

  return (
    <ThemeProvider theme={theme}>
        <Router>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            <Route
              path="/"
              render={() => <Redirect to="/page/Home" />}
              exact={true}
            />
        </Router>
    </ThemeProvider>
  );
}

export default App;
