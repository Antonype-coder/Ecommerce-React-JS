import { useProducts } from "../../hooks/useProducts";
import withLoader from "../../hoc/withLoader";
import ItemList from "./ItemList";

const ItemListWithLoader = withLoader(ItemList);

const ItemListContainer = () => {
  const { products, loading } = useProducts();

  return <ItemListWithLoader items={products} loading={loading} />;
};

export default ItemListContainer;
