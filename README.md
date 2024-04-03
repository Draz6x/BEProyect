Primera Entrega - Curso Backend

Se realiza la implementación de los siguientes componentes:

Gestores de productos y usuarios, estos datos serán guardados en la memoria y archivos.
-create(data) para crear un item
-read() para la lectura de los items
readOne(id) para detectar dicho item
-update(id,data) para actualizar este recurso
-destroy(id) para eliminar este item
ES IMPERATIVO IMPLEMENTAR LOS "ENDPOINTS" PARA USUARIOS Y PRODUCTOS.
Se realiza el manejo de errores a traves de las rutas errorHandler y rutas no existentes con pathHandler y el registro de las solicitudes.
Se definieron cuatro usuarios con distintos roles y 45 productos.

Cada usuario tiene las propiedades:

-id 12bytes y hexadecimal
-photo con ruta de imagen
-email
-password
-role rol de usuario

Cada producto cuenta con las siguientes propiedades:

-id de 12bytes y hexadecimal
-title 
-category
-photo con ruta de imagen 
-price
-stock unidades disponibles

