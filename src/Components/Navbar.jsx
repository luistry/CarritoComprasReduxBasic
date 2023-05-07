import { Typography, Container, Button, AppBar, Toolbar } from "@mui/material";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const Menubar = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar className="toolbar">
        <Button variant="outlined" startIcon={<Home />} component={Link} to="/" style={{ marginRight: "10px", color: "white" }}>
          Inicio
        </Button>
        <Button variant="outlined" startIcon={<ShoppingCart />} component={Link} to="/Carrito" style={{ color: "white" }}>
          Carro de compras
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menubar;
