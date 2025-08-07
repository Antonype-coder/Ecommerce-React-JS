const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} width={200} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
};

export default ItemDetail;
