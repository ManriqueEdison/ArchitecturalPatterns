/***

Supongamos que estamos construyendo una aplicación de gestión de usuarios. 
Tenemos una interfaz de usuario (UI) que permite a los usuarios registrarse y ver su información personal. 
También tenemos una base de datos donde almacenamos la información de los usuarios.

En la Arquitectura Hexagonal, dividimos nuestra aplicación en tres capas principales: 
    la capa de aplicación
    la capa de dominio
    la capa de infraestructura

En la capa de aplicación:
tenemos los casos de uso que definen las acciones que los usuarios pueden realizar. 
Por ejemplo, podríamos tener un caso de uso llamado "Registrar usuario" que se encarga de validar 
los datos del usuario y almacenarlos en la base de datos.

En la capa de dominio: 
tenemos las entidades y los repositorios. 
Las entidades representan los conceptos principales de nuestro dominio, como el usuario en este caso. 
Los repositorios son interfaces que definen cómo interactuamos con la base de datos. 
Por ejemplo, podríamos tener una interfaz de repositorio llamada "UsuarioRepository" con métodos como 
"guardarUsuario" y "obtenerUsuarioPorId".

En la capa de infraestructura: 
implementamos los detalles técnicos de cómo interactuamos con la base de datos y la interfaz de usuario. 
Por ejemplo, podríamos tener una implementación de repositorio llamada "UsuarioRepositoryMongoDB" que 
utiliza MongoDB para almacenar y recuperar los datos de los usuarios.

Aquí tienes un ejemplo de cómo se vería la estructura de directorios de nuestra aplicación:


- application
    - casosDeUso
        - registrarUsuario.js
- domain
    - entidades
        - usuario.js
    - repositorios
        - usuarioRepository.js
- infrastructure
    - repositorios
        - usuarioRepositoryMongoDB.js
- ui
    - index.js

  
En el archivo registrarUsuario.js en la capa de aplicación, tendríamos la lógica para validar los datos del usuario 
y llamar al repositorio para almacenarlos en la base de datos.

En el archivo usuario.js en la capa de dominio, definiríamos la entidad Usuario con sus propiedades y métodos.

En el archivo usuarioRepository.js en la capa de dominio, definiríamos la interfaz UsuarioRepository con los métodos 
para guardar y obtener usuarios.

En el archivo usuarioRepositoryMongoDB.js en la capa de infraestructura, implementaríamos la interfaz UsuarioRepository 
utilizando MongoDB para almacenar y recuperar los datos de los usuarios.

En el archivo index.js en la capa de interfaz de usuario, tendríamos la lógica para interactuar con el usuario, 
como mostrar formularios y llamar a los casos de uso correspondientes.

Esta es solo una visión general de cómo se podría implementar la Arquitectura Hexagonal en JavaScript. 
La idea principal es separar las preocupaciones y tener una estructura modular y flexible que permita cambios y pruebas fáciles. 
Espero que esto te dé una idea de cómo funciona este patrón arquitectónico en JavaScript.

*/