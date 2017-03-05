import ActionTypes from "./TodoActionTypes";
import TodoDispatcher from "./TodoDispatcher";

const Actions = {
    addItem(text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            text,
        });
    },
    removeItem(text) {
        TodoDispatcher.dispatch({
            type: ActionTypes.REMOVE_ITEM,
            text,
        });
    }
};

export default Actions;