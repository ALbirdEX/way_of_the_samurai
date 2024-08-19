import {ActionsTypes, SidebarType} from "./store";

const initialState: SidebarType =  {
    friends: [
        {id: 1, name: 'Fedor'},
        {id: 2, name: 'Vica'},
        {id: 3, name: 'Andrei'}
    ]
}

const sidebarReducer = (sidebar: SidebarType = initialState, action: ActionsTypes) => {
    return sidebar
};

export default sidebarReducer;