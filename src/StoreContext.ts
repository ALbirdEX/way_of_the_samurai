import React from "react";
import {reduxStore} from "./components/redux/reduxStore";

export const StoreContext = React.createContext(reduxStore)