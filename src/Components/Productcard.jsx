import { useState, useEffect } from "react";
import { Container } from "@mui/material";

const ProductoCard = ({ producto, onAgregarAlCarrito }) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    guardarProductosEnCarritoEnLocalStorage(productosEnCarrito);
  }, [productosEnCarrito]);

  const handleAgregarAlCarritoLocal = () => {
    setProductosEnCarrito([...productosEnCarrito, producto]);
    onAgregarAlCarrito();
  };

  const guardarProductosEnCarritoEnLocalStorage = (productos) => {
    localStorage.setItem('productosEnCarrito', JSON.stringify(productos));
  }

  return (
   <Container></Container>
  );
};

export default ProductoCard;
