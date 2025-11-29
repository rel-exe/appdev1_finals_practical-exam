// src/pages/Todos.jsx
import DateTime from "../components/DateTime";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import ThemeSwitcher from "../components/ThemeSwitcher";
import GitHubCorner from "../components/GithubCorner"

function Todos() {
  return (
    <div>
      <header id="header">
        <ThemeSwitcher />
        <GitHubCorner url="https://github.com/Lordwill1/todo-list" />
        <h1 id="title">Just do it.</h1>
      </header>
      <AddTodoForm />
      <DateTime />
      <TodoList />
    </div>
  );
}

export default Todos;
