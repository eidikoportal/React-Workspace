function Hello({ obj }) {
  //const { name } = props;
  return (
    <div className="App">
      Hello {obj.name} {obj.arr}
    </div>
  );
}
export default Hello;
