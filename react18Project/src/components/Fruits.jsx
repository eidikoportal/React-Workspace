import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 30 },
    { name: "Mango", price: 20 },
    { name: "Grapes", price: 60 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
