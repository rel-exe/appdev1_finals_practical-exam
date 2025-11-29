import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todosSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{todo.title}</li>
      <button className="check-btn" onClick={toggleComplete}>✔</button>
      <button className="delete-btn" onClick={handleDelete}>🗑</button>
    </div>
  );
}

export default TodoItem;
