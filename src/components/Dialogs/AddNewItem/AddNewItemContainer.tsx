import {addMessageAC, InitialStateType, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import {AddNewItem} from "./AddNewItem";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

/*type AddNewItemContainerPropsType = {
    dispatch: (action: DialogActionsTypes) => void
    newMessageText: string
}

export const AddNewItemContainer = (props: AddNewItemContainerPropsType) => {

    const addPost = () => {
        if (props.newMessageText) {
            props.dispatch(addMessageAC())
        }

    }

    const updateMessageText = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text))
    }

    return <AddNewItem newMessageText={props.newMessageText}
                       sendMessage={addPost}
                       updateNewMessageText={updateMessageText}/>
};*/

type MapStatePropsType = {
    dialogPage : InitialStateType
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewMessageText: (text: string) => void

}


export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

    export const AddNewItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewItem)