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

## API’s - Diseño
1. Guardar cambios en el perfil

Request:
```
PUT BASE_URL/api/v1/profile/edit
Content-Type: Application/json
Authorization: Bearer {token}

{
  "nombre": "Juan",
  "apellido": "Perez",
  "usuario": "junitoxd",
  "correo": "juanito123@gmail.com"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Perfil actualizado con éxito."
}
```

2. Actualizar la foto de perfil

Request:
```
PUT BASE_URL/api/v1/profile/edit/photo
Content-Type: multipart/form-data
Authorization: Bearer {token}

{
  "foto": "Archivo de imagen"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Foto de perfil actualizada con éxito."
}
```

3. Cambiar contraseña

Request:
```
PUT BASE_URL/api/v1/profile/edit/password
Content-Type: Application/json
Authorization: Bearer {token}

{
  "contrasenaActual": "ContrasenaVieja123",
  "nuevaContrasena": "NuevaContrasena321"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Contraseña actualizada con éxito."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Datos inválidos",
  "message": "La información proporcionada es incorrecta o está incompleta."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión o la contraseña actual es incorrecta."
}
```

Response: Error statusCode: 403 (Forbidden)
```
{
  "error": "Prohibido",
  "message": "No tiene permisos para realizar esta acción."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo actualizar la información del perfil."
}
```



