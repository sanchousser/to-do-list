import { Component } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList/TaskList";
import todos from "./todos.json";
import { Dropdown } from "./components/Dropdown/Dropdown";

class App extends Component {
  state = {
    todos,
  };

  deleteToDo = (toDoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== toDoId)
    })
  );
  };

  render() {
    const { todos } = this.state;

    return (<>
     <TaskList onDeleteToDo={this.deleteToDo} todos={todos} />
     <Dropdown />
     </>);
  }
}

export default App;
