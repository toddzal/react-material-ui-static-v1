import firebase from "firebase";
import { useDatabaseList, useFirebaseApp, useUser } from 'reactfire';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER, 
  STORE_USER
} from "./types";
//const database = firebase.database().ref('/users');

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const storeUser = text => {
  return {
    type: STORE_USER,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        console.log(error);

        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

export const loginWithEmail = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logoutUser = () => {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });

    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        
      })
      .catch(function(error) {
        // An error happened.
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  this.props.history.push("/");
};

export function writeUserData(userId, name, email) {
  /*useFirebaseApp().database.ref('users/' + userId).set({
    username: name,
    email: email
  });*/
}

