import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products && products.length > 0 ? (
        products.map((product) => <Item key={product.id} product={product} />)
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};

export default ItemList;
