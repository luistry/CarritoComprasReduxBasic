const estadoInicial = {
    Productos: [
      {
        nombre: "Reebook Clasic Leather",
        precio: 50,
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1096936421404721293/51f81497b77d461589f2af2401801ff3_9366.jpg",
        descripcion:
          "Nuevo Producto Perteneciente a La Marca Reebook Modelo Clasic Totalmente Original",
        disponibilidad: "Disponible",
        cantidadEnStock: 4,
      },
      {
        nombre: "Nike Panda",
        precio: 100,
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1096932634426347612/Panda.jpg",
        descripcion:
          "Los Nike Panda son el nuevo modelo de Zapatos Lanzado por Nike para su desarrollo de los cuales son una manera extravagante de vestir",
        disponibilidad: "Disponible",
        cantidadEnStock: 3,
      },
      {
        nombre: "Converse Clasic",
        precio: 100,
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1096932801045074020/Converse.jpg",
        descripcion:
          "Converse Nos Ofrece una variedad de Calzado para vestir bien, Su modelo Clasico No son la Excepcion",
        disponibilidad: "Disponible",
        cantidadEnStock: 2,
      },
      {
        nombre: "Nike air Jordan Retro Shadow",
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1097216261244584097/13031536_21350126_600.jpg",
        precio: 100,
        descripcion:
          "Los Nike Air Jordan Retro Shadow un Modelo Expectacular que demuestra el estilo",
        cantidadEnStock: 1,
      },
      {
        nombre: "Adidas Originals",
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1096948122556579910/Adidas.jpg",
        precio: 70,
        descripcion:
          "Los Adidas Originals Combinan con el Estilo y son una gran opcion",
        cantidadEnStock: 2,
      },
      {
        nombre: "Puma Clasic",
        imagen:
          "https://cdn.discordapp.com/attachments/750089258852941874/1097215574125322440/louis-vuitton-tenis-lv-trainer-zapatos--BO9U7PMI02_PM2_Front_view.jpg",
        precio: 40,
        descripcion:
          "Los Puma Clasicos es una opcion un tanto innovadora como sutil a la hora de lucir",
        cantidadEnStock: 1,
        disponibilidad: "Disponible",
      },
    ],
carrito: []
  };
  


  const Reducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
      case "AGREGAR_CARRITO_PRODUCTO":
        console.log("Producto ha sido añadido al Carrito de Compras");
        return {
          ...estado,
          carrito: [...estado.carrito, accion.producto],
        };
      case "ELIMINAR_CARRITO_PRODUCTOS":
        console.log("Todos los Productos han Sido Eliminados del Carrito");
        return {
          ...estado,
          carrito: [],
        };
      default:
        return estado;
    }
  };
  
  
export default Reducer