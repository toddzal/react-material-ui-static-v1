import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { connect, mapStateToProps } from "react-redux";
import TopBar from "../components/TopBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import { storeUser, writeUserData } from "../actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
}));


function Page({ children }) {
  const classes = useStyles();
  const [x, setX] = React.useState(false);
  const openDialog = () => setX(true);
  const closeDialog = () => setX(false);

    return (
    <>
      <TopBar>
        <React.Suspense fallback={''}>

        </React.Suspense>
      </TopBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div>
          <Container><React.Suspense fallback={''}>{children}</React.Suspense></Container>
        </div>
      </main>
    </>
    );
}

mapStateToProps = state => {
  return {
    userID: state.auth.user
  };
};

export default connect( mapStateToProps, {  })(Page);
