import Item from "./Item";

const ItemList = ({ items }) => {
  if (!items) return null;
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {items.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;

