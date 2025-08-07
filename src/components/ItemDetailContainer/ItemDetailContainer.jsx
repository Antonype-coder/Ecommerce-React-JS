import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/products';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loading />;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
