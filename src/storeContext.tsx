import React from "react";
import {store, StoreType} from "./components/redux/store";

export type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}

export const StoreContext = React.createContext(store)

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}