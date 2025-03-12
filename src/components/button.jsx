// write button card here
import React from "react";

const ViewProductButton = () => {
  return (
    <button style={styles.button}>View Product</button>
  );
};

const styles = {
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  }
};

export default ViewProductButton;
