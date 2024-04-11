import { useState } from "react";
import styles from "./todoform.module.css";
export default function TodoForm({ todos, setTodos }) {
  // const [name, setName] = useState("");
  const [name, setName] = useState({ todo: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, name]);
    setName({ todo: "", done: false });
  }
  return (
    <form className={styles.todoForm}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.modernInput}
          value={name.todo}
          onChange={(e) => setName({ todo: e.target.value, done: false })}
          placeholder="Enter the Todos here"
        />
        <button className={styles.modernBut} onClick={(e) => handleSubmit(e)}>
          ADD
        </button>
      </div>
    </form>
  );
}
