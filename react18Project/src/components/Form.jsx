import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>ADD</button>
      </form>
    </div>
  );
}
