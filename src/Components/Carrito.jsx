import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Card, Button, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { connect } from "react-redux";
const Carrito = ({onEliminarCarrito}) => {
  const [productosEnCarrito, setProductosEnCarrito] = useState({});
  useEffect(() => {
    const productosSeleccionados = JSON.parse(localStorage.getItem("productosSeleccionados"));
    if (productosSeleccionados) {
      const productosEnCarrito = {};
      productosSeleccionados.forEach((producto) => {
        if (producto.id in productosEnCarrito) {
          productosEnCarrito[producto.id].cantidad += 1;
        } else {
          productosEnCarrito[producto.id] = {
            ...producto,
            cantidad: 1,
          };
        }
      });
      setProductosEnCarrito(productosEnCarrito);
    }
  }, []);
  const handleLimpiarCarrito = () => {
    localStorage.removeItem("productosSeleccionados");
    setProductosEnCarrito({});
    onEliminarCarrito();
  };

  const calcularTotal = () => {
    return Object.values(productosEnCarrito).reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };
  return (
    <div style={{ margin: "4rem 0 2rem" }}>
      <TableContainer component={Paper}>
        <Table aria-label="carrito de compras">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Cantidad</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(productosEnCarrito).map((producto) => (
              <TableRow key={producto.id}>
                <TableCell component="th" scope="row">
                  {producto.nombre}
                </TableCell>
                <TableCell align="right">{producto.precio}$</TableCell>
                <TableCell align="right">{producto.cantidad}</TableCell>
                <TableCell align="right">{producto.precio * producto.cantidad}$</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                Total:
              </TableCell>
              <TableCell align="right">{calcularTotal()}$</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
        <Button variant="outlined" endIcon={<Delete />} color="error" onClick={handleLimpiarCarrito}>
          Limpiar carrito
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (estado) => {
  return {
    carrito: estado.carrito
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onEliminarCarrito: () => {
      dispatch({ type: "ELIMINAR_CARRITO_PRODUCTOS" });
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Carrito);
