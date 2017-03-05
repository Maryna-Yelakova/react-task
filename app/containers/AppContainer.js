import AppView from "../views/AppView";
import {Container} from "flux/utils";
import React from "react";
import TasksStore from "../data/TodoStore";
import Actions from "../data/TodoActions";

class AppContainer extends React.Component
{
    static getStores() {
        return [TasksStore];
    }
    static calculateState(prevState) {
        return {
            tasks: TasksStore.getState(),
            onAddItem: Actions.addItem,
            onRemoveItem: Actions.removeItem
        };
    }
    render() {
        return <AppView tasks={this.state.tasks}
                        onRemoveItem={this.state.onRemoveItem}
                        onAddItem={this.state.onAddItem}  />;
    }
}
export default Container.create(AppContainer);