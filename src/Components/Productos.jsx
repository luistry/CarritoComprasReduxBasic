import { Card, Button, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { data } from '../Data';
import ProductoCard from "./Productcard";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {Snackbar,Alert} from "@mui/material";

const Productos = ({onAgregarAlCarrito}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [productos, setProductos] = useState(data);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };
  
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  
    setOpenSnackbar(false);
  };
  

  useEffect(() => {
    if (productosSeleccionados.length > 0) {
      localStorage.setItem('productosSeleccionados', JSON.stringify(productosSeleccionados));
    }
  }, [productosSeleccionados]);
  useEffect(() => {
    const productosSeleccionadosGuardados = localStorage.getItem('productosSeleccionados');
    if (productosSeleccionadosGuardados) {
      setProductosSeleccionados(JSON.parse(productosSeleccionadosGuardados));
    }
  }, []);
  
  const handleComprar = (producto) => {
    onAgregarAlCarrito(producto);
    setProductosSeleccionados([...productosSeleccionados, producto]);
    handleSnackbarOpen();
  };
  
  
  const handleAgregarAlCarrito = () => {
    setProductosEnCarrito([...productosEnCarrito, ...productosSeleccionados]);
    setProductos(productos.filter((producto) => !productosSeleccionados.includes(producto)));
    setProductosSeleccionados([]);
  };
  
  return (
    <>
      <Grid container spacing={2} justifyContent="space-between">
        {productos.map((producto) => (
          <Grid item key={producto.id} xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Card sx={{
              width: "300px",
              height: "auto",
              margin: "0 auto",
              marginBottom: "1rem",
              backgroundColor: "#f8f8f8",
              boxShadow: "none",
              borderRadius: "8px",
              "&:hover": {
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transform: "translateY(-2px)",
                transition: "all 0.3s ease"
              }
            }} style={{ margin: "4rem 0 2rem" }}>
              <CardMedia component="img" image={`${producto.imagen}`} style={{ maxWidth: "100%", maxHeight: "300px", height: "auto", objectFit: "cover",backgroundColor: "#CCCCCC" }} />
              <CardContent sx={{ paddingBottom: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <Typography variant="h5" color="initial" textAlign={"center"} sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", fontSize: "1.2rem", lineHeight: "1.4em" }}>
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body1" textAlign={"center"} color="initial">Descripcion:</Typography>
                  <Typography variant="body2" color="initial">
                    {producto.descripcion}
                  </Typography>
                </div>
                <div>
                  <Typography variant="subtitle2" color="green">
                    Precio: {producto.precio}$
                  </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained" onClick={() => handleComprar(producto)}>Comprar</Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {productosSeleccionados.length > 0 && (
        <ProductoCard producto={productosSeleccionados} onAgregarAlCarrito={handleAgregarAlCarrito} />
      )}<Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={handleSnackbarClose}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
>
<Alert  onClose={handleSnackbarClose} severity="success"  sx={{ width: "100%" }}>
¡Añadiste un Producto al Carrito!
</Alert>
</Snackbar>
    </>
  );

};
const mapStateToProps = (estado) => {
  return {
    productos: estado.productos
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAgregarAlCarrito: (producto) => {
     
      dispatch({ type: "AGREGAR_CARRITO_PRODUCTO", producto: producto });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Productos);