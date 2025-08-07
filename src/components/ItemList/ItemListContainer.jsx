import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "../../data/products";

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const pedirProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
        }, 1000);
      });
    };

    pedirProductos().then((respuesta) => {
      setItems(respuesta);
    });
  }, []);

  return (
    <section>
      <h2>{saludo}</h2>
      <ItemList productos={items} />
    </section>
  );
};

export default ItemListContainer;
