// write product card here
import React from "react";
import ViewProductButton from "../components/button"; // Importing the button component

const ProductCard = () => {
  // Static product details
  const productName = "Awesome Sneakers";
  const productPrice = "$49.99";
  const productImage = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNcdwhehbzTt7JkBsm9z61ui5R5A_cNt4mJrd6KDc2-Q8qulevuzGfr92Hu2OM31Qs-edG5_grJXVfwVQtvyWrghpplIk0XcMsQo9NmoswgYKZnKhTBSvGGh0"; // Placeholder image

  return (
    <div style={styles.card}>
      <img src={productImage} alt={productName} style={styles.image} />
      <h2 style={styles.name}>{productName}</h2>
      <p style={styles.price}>{productPrice}</p>
      <ViewProductButton /> 
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    width: "200px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  name: {
    fontSize: "18px",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    color: "green",
    fontWeight: "bold",
  }
};

export default ProductCard;
