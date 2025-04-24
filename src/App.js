import { Component } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList/TaskList";
import todos from "./todos.json";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

class App extends Component {
  state = {
    todos,
    isShowModal: false,
  };

  deleteToDo = (toDoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== toDoId),
    }));
  };

  showModal = ()=> {
    this.setState({isShowModal:true})
  }

  closeModal = ()=> {
    this.setState({isShowModal:false})
  }



  render() {
    const { todos } = this.state;

    return (
      <>
        <Header showModal={this.showModal}/>
        {this.state.isShowModal && <Modal closeModal={this.closeModal}>Lorem pisun</Modal>}
        <TaskList onDeleteToDo={this.deleteToDo} todos={todos} />
        <Dropdown />
      </>
    );
  }
}

export default App;
