/***

Imaginemos que estamos construyendo una aplicación de chat en tiempo real. 
En este caso, el patrón Cliente-Servidor es fundamental para la comunicación entre los usuarios.

En el lado del servidor, utilizamos JavaScript para construir una API que maneja las solicitudes y respuestas de los clientes. 
Esta API se encarga de recibir y enviar mensajes entre los usuarios, almacenar los mensajes en una base de datos y gestionar 
la autenticación de los usuarios. Por ejemplo, cuando un cliente envía un mensaje, el servidor lo recibe, lo almacena en la 
base de datos y luego lo envía a los demás clientes conectados.

En el lado del cliente, utilizamos JavaScript para construir la interfaz de usuario y manejar la comunicación con el servidor. 
Aquí, utilizamos tecnologías como WebSocket o AJAX para establecer una conexión bidireccional con el servidor y recibir 
actualizaciones en tiempo real. Por ejemplo, cuando un cliente envía un mensaje, el cliente JavaScript lo envía al servidor 
a través de una solicitud HTTP o WebSocket, y luego muestra el mensaje en la interfaz de usuario.

El patrón Cliente-Servidor permite una separación clara de responsabilidades. 
El servidor se encarga de manejar la lógica del negocio, almacenar datos y gestionar la comunicación entre los clientes. 
Mientras tanto, el cliente se encarga de la interfaz de usuario y la interacción con el usuario.

Este enfoque permite una escalabilidad y mantenibilidad eficientes. 
Podemos tener múltiples clientes conectados al mismo servidor, y el servidor puede manejar todas las solicitudes y respuestas 
de manera eficiente. Además, si necesitamos realizar cambios en la lógica del negocio o en la interfaz de usuario, 
podemos hacerlo de forma independiente sin afectar a la otra parte.

*/