import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/products';
import ItemList from './ItemList';
import Loading from '../Loading/Loading';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      const filtered = category
        ? data.filter((item) => item.category === category)
        : data;

      setProducts(filtered);
      setLoading(false);
    });
  }, [category]);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>{category ? `Productos de ${category}` : 'Todos los productos'}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
