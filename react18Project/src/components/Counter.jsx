import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>counter value is:{count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  );
}
