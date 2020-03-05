import React from "react";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";
import CrudForm from "./pages/crud/CrudForm";
import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp
} from "ionicons/icons";

const routes = [
  {
    name: "Home",
    path: "/page/Home",
    exact: true,
    icon: <HomeIcon />,
    main: () => <Home />
  },
  {
    name: "Inbox",
    path: "/page/Inbox",
    icon: <InboxIcon />,
    main: () => <Inbox />
  },
];

export default routes;
