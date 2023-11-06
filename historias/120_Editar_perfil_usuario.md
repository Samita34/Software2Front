# HISTORIA 120
Yo como: Usuario de la página 
Quiero: Editar los datos de mi perfil de usuario
Para: Actualizar mi información  

## Especificación de requerimientos
El usuario debe estar registrado
Para subir una nueva foto de perfil, esta debe tener una resolución de 30 ppi. El tamaño máximo de una imagen 1024 x 1024, aspect ratio de 1:1. Archivos JPG.

## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla para editar el perfil de usuario cuyo funcionamiento es:
El usuario ingresa en la pantalla
Puede cambiar su foto que debe estar lista previamente
También puede cambiar su contraseña, verificando la contraseña actual previamente 

![Alt text](/historias/imagenes/editar_perfil_usuario.png)

## Validación de datos
Dado: Que el usuario cambió correctamente sus datos personales
Cuando: Editó su perfil
Entonces: Se guardan y actualizan

Dado: Que el usuario cambió de manera incorrecta sus datos personales
Cuando: Editó su perfil
Entonces: Se pide que revise e introduzca datos correctos

## API’s
