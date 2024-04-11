export default function Fruit({ name, price }) {
  return (
    <>
      {/* {name} {price} */}
      {price > 20 ? (
        <li>
          {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
