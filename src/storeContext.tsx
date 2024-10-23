import React from "react";
import {StoreType} from "./components/redux/store";
import {AppRootStateType, reduxStore} from "./components/redux/reduxStore";

export type ProviderType = {
    store: AppRootStateType,
    children: React.ReactNode
}

export const StoreContext = React.createContext({} as AppRootStateType)

