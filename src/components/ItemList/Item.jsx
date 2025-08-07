import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  if (!product || !product.id || !product.name) {
    return <div>Error: producto inválido</div>;
  }

  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} width={150} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/detail/${product.id}`} className="info-button">
        Ver más
      </Link>
    </div>
  );
};

export default Item;
