import { Container } from '@mui/material';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Productos from './Components/Productos';
import Carrito from './Components/Carrito';
import Menubar from './Components/Navbar';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './Components/reducer/TiendaReducer';

function App() {
 const store = configureStore({
  reducer: Reducer
 })
 console.log(store.getState())
  return (
    <Provider store={store}>

  
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Container>
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </Container>
      </BrowserRouter>
      
    </div> 
     </Provider>
  );
}

export default App;
