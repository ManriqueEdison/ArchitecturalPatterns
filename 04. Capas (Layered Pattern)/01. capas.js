/***

Imaginemos que estamos construyendo una aplicación web para una tienda en línea. 
Podemos dividir nuestra aplicación en tres capas principales: 
la capa de presentación, la capa de lógica de negocio y la capa de acceso a datos.

En la capa de presentación, nos encargamos de la interfaz de usuario y la interacción con el usuario. 
Aquí utilizamos HTML, CSS y JavaScript para crear y mostrar la página web. 
Por ejemplo, podemos tener un formulario de registro donde el usuario ingresa su nombre, 
dirección de correo electrónico y contraseña.

En la capa de lógica de negocio, nos encargamos de todas las reglas y operaciones relacionadas 
con el negocio de la tienda en línea. Aquí es donde validamos los datos ingresados por el usuario, 
realizamos cálculos y tomamos decisiones basadas en la lógica del negocio. Por ejemplo, podemos verificar 
si el correo electrónico ingresado ya está registrado en nuestra base de datos.

En la capa de acceso a datos, nos encargamos de interactuar con la base de datos o cualquier otra fuente de datos. 
Aquí realizamos consultas, actualizaciones y eliminaciones de datos. 
Por ejemplo, podemos guardar la información del nuevo usuario en nuestra base de datos.

Para mantener una separación clara entre estas capas, utilizamos técnicas como la modularización y la encapsulación. 
Podemos tener archivos JavaScript separados para cada capa y utilizar funciones y objetos para comunicar y compartir datos 
entre ellas.

Por ejemplo, en la capa de presentación, podemos tener una función que se encargue de obtener los datos ingresados por 
el usuario desde el formulario y llamar a una función en la capa de lógica de negocio para validar esos datos. 
Luego, la capa de lógica de negocio puede llamar a una función en la capa de acceso a datos para guardar los datos en 
la base de datos.

Este enfoque de capas nos permite tener un código más organizado, modular y fácil de mantener. Cada capa tiene su 
responsabilidad específica y puede ser modificada o reemplazada sin afectar a las otras capas.


*/