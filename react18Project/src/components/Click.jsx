export default function Click() {
  function handleClick() {
    console.log("Click");
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
