import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import Actions from "./TodoActions";
import ActionTypes from "./TodoActionTypes";
import TodoDispatcher from "./TodoDispatcher";

class TasksStore extends ReduceStore{
    constructor()
    {
        super(TodoDispatcher);
    }
    getInitialState() {
        return Immutable.List.of('my first task', 'my second task');
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return state.delete(index);
                }
                return state;
            default:
                return state;
        }
    }
}
export default new TasksStore();