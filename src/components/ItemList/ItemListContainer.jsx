import { useEffect, useState } from "react";
import { getProducts } from "../../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts()
      .then(setItems)
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
