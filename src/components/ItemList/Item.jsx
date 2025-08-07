const Item = ({ name, price, img, description }) => (
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "250px"
  }}>
    <img
      src={img}
      alt={name}
      style={{ width: "100%", borderRadius: "10px" }}
    />
    <h3>{name}</h3>
    <p>{description}</p>
    <strong>${price.toLocaleString("es-CO")}</strong>
  </div>
);

export default Item;
