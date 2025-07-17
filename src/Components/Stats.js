export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        {" "}
        <em> Start Adding Some Items to your Packing list 📦 </em>{" "}
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((packedItems / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You have Packed Everything! Ready to go 🚘"
          : `💼 you have ${numItems} items on your list and you already packed
        ${packedItems} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
