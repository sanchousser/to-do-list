import { useState } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList/TaskList";
import todosObj from "../src/todos.json";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";

const App = () => {


  const [todos, setTodos] = useState(todosObj);
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const deleteToDo = (toDoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== toDoId));
  };

  return (
    <>
      <Header showModal={showModal} />
      {isShowModal && <Modal closeModal={closeModal}>Lorem pisun</Modal>}
      <TaskList onDeleteToDo={deleteToDo} todos={todos} />
      <Dropdown />
    </>
  );
};

// class App extends Component {
//   state = {
//     todos,
//     isShowModal: false,
//   };

//   deleteToDo = (toDoId) => {
//     this.setState((prevState) => ({
//       todos: prevState.todos.filter((todo) => todo.id !== toDoId),
//     }));
//   };

//   showModal = ()=> {
//     this.setState({isShowModal:true})
//   }

//   closeModal = ()=> {
//     this.setState({isShowModal:false})
//   }

//   render() {
//     const { todos } = this.state;

//     return (
//       <>
//         <Header showModal={this.showModal}/>
//         {this.state.isShowModal && <Modal closeModal={this.closeModal}>Lorem pisun</Modal>}
//         <TaskList onDeleteToDo={this.deleteToDo} todos={todos} />
//         <Dropdown />
//       </>
//     );
//   }
// }

export default App;
