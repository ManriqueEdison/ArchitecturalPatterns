// Modelo
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Vista
class VistaProducto {
    mostrarProducto(producto) {
        console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
    }
}

// Controlador
class ControladorProducto {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarProducto(nombre, precio) {
        const producto = new Producto(nombre, precio);
        this.modelo.agregarProducto(producto);
        this.vista.mostrarProducto(producto);
    }
}

// Uso del patrón MVC
const modelo = {
    productos: [],

    agregarProducto(producto) {
        this.productos.push(producto);
    }
};

const vista = new VistaProducto();
const controlador = new ControladorProducto(modelo, vista);

controlador.agregarProducto("Camiseta", 20);

/***

En este ejemplo, el Modelo (Producto) representa un producto con un nombre y un precio. 
La Vista (VistaProducto) se encarga de mostrar los datos del producto al usuario. 
El Controlador (ControladorProducto) actúa como intermediario entre el Modelo y la Vista, 
maneja las interacciones del usuario y actualiza el Modelo y la Vista según sea necesario.

En el uso del patrón MVC, creamos una instancia del Modelo, la Vista y el Controlador. 
Luego, llamamos al método agregarProducto del Controlador para agregar un nuevo producto al Modelo. 
El Controlador se encarga de actualizar el Modelo y la Vista en consecuencia.

En este caso, la Vista simplemente muestra los datos del producto en la consola, 
pero en una aplicación real, la Vista podría ser una interfaz de usuario gráfica.

*/