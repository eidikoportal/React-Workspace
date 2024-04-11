import { useState } from "react";
import RenderTodo from "./RenderTodo";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const todosCompletedCount = todos.filter((item) => item.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer count={todosCompletedCount} totalTodos={totalTodos} />
    </div>
  );
}
