const Item = ({ nombre, precio, img }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "10px",
      maxWidth: "200px",
      backgroundColor: "#fff",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img src={img} alt={nombre} style={{ width: "100%", borderRadius: "8px" }} />
      <h4>{nombre}</h4>
      <p style={{ fontWeight: "bold" }}>${precio.toLocaleString()} COP</p>
    </div>
  );
};

export default Item;
