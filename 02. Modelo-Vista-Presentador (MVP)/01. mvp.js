// Modelo
class Modelo {
    constructor() {
        this.datos = [];
    }

    agregarDato(dato) {
        this.datos.push(dato);
    }

    obtenerDatos() {
        return this.datos;
    }
}

// Vista
class Vista {
    constructor() {
        this.presentador = null;
    }

    setPresentador(presentador) {
        this.presentador = presentador;
    }

    mostrarDatos(datos) {
        console.log("Datos:", datos);
    }

    manejarEvento() {
        const dato = "Nuevo dato";
        this.presentador.agregarDato(dato);
    }
}

// Presentador
class Presentador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.setPresentador(this);
    }

    agregarDato(dato) {
        this.modelo.agregarDato(dato);
        const datos = this.modelo.obtenerDatos();
        this.vista.mostrarDatos(datos);
    }
}

// Uso
const modelo = new Modelo();
const vista = new Vista();
const presentador = new Presentador(modelo, vista);

vista.manejarEvento(); // Agrega un nuevo dato y muestra los datos actuales

/***

En este ejemplo, el Modelo es responsable de almacenar los datos, la Vista se encarga de mostrar los datos y manejar eventos, 
y el Presentador actúa como intermediario entre el Modelo y la Vista. Cuando se llama al método manejarEvento() en la Vista, 
se agrega un nuevo dato al Modelo a través del Presentador, y luego se muestra la lista actualizada de datos en la Vista.

Este es solo un ejemplo básico para ilustrar el patrón MVP en JavaScript. En una aplicación real, el patrón MVP se puede 
utilizar para separar la lógica de presentación de la lógica de negocio y facilitar el mantenimiento y la escalabilidad del código.

*/