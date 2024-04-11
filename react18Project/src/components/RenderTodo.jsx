import styles from "./rendertodo.module.css";
export default function RenderTodo({ todo, todos, setTodos }) {
  function handleDelete(todo) {
    setTodos(todos.filter((item) => item !== todo));
  }
  function handleClick(todoName) {
    const newTodos = todos.map((item) =>
      item.todo === todoName ? { ...item, done: !item.done } : item
    );
    setTodos(newTodos);
  }
  const todoCompleted = todo.done ? styles.completed : "";
  return (
    <div className={styles.renderTodo}>
      <div className={styles.renderTodoName}>
        <span className={todoCompleted} onClick={() => handleClick(todo.todo)}>
          {todo.todo}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.renderTodoDel}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.renderTodoLine} />
    </div>
  );
}
