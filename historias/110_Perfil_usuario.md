# HISTORIA 110
Yo como: Usuario de la página <br>
Quiero: Revisar mi perfil de usuario<br>
Para: Asegurarme de que mis datos estén correctos  <br>

## Especificación de requerimientos
El usuario debe estar registrado<br>
## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla del perfil de usuario cuyo funcionamiento es:<br>
El usuario ingresa en la pantalla<br>
Observa sus datos personales<br>
Se tiene un botón para editar sus datos<br>

![Alt text](/historias/imagenes/perfil_usuario.png)

## Validación de datos
Dado:<br>
Cuando: <br>
Entonces: <br>

## API’s - Diseño
1. Obtener la información del perfil del usuario

Request:
```
GET  BASE_URL/api/v1/profile
Accept: Application/json
Authorization: Bearer {token}
```

Response: Exitoso statusCode: 200
```
{
  "nombre": "Juan",
  "apellido": "Perez",
  "usuario": "junitoxd",
  "correo": "juanito123@gmail.com",
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión para acceder a la información del perfil."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo obtener la información del perfil."
}
```

