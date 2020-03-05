import firebase from "firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  DESC_CHANGED,
  DETAIL_CHANGED
} from "./types";


export const descChanged = text => {
  return {
    type: DESC_CHANGED,
    payload: text
  };
};

export const detailChanged = text => {
  return {
    type: DETAIL_CHANGED,
    payload: text
  };
};
