export default function ConditionalRendering({ displayFlag }) {
  return displayFlag ? <div>True</div> : <div>False</div>;
}
