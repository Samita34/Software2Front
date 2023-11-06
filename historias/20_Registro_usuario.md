# HISTORIA 20
Yo como: Persona no registrada en la página<br>
Quiero: Registrarme en la página de forma sencilla.<br>
Para: Visualizar, publicar y guardar recetas de comida<br>

## Especificación de requerimientos
El nuevo usuario debe ingresar los datos que se piden.<br>
La contraseña debe ser ingresada 2 veces para verificar esta.<br>
El usuario también puede registrarse con su correo electrónico.<br>
## Análisis
### Pantalla de registro
A continuación se presenta la pantalla de registro cuyo funcionamiento es:
El usuario ingresa sus datos: nombre de usuario, contraseña y llena la verificación de la contraseña. <br>
Otra alternativa es registrarse con el correo electrónico<br>
Presionar el botón de registrarse<br>
Se validan los datos y se da una respuesta.<br>
Si el registro fue exitoso ingresa.<br>
De lo contrario, se pide que modifique sus datos.<br>

![Alt text](/historias/imagenes/registro.png)

## Validación de datos
Dado: Que los datos ingresados son válidos.<br>
Cuando: El usuario quiere registrarse.<br>
Entonces: Se concede el acceso a la página.<br>

Dado: Que los datos ingresados no son válidos.<br>
Cuando: El usuario quiere registrarse.<br>
Entonces: Se pide que ingrese nuevos datos.<br>

## API’s
