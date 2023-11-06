# HISTORIA 55
Yo como: Usuario de la página<br>
Quiero: Dejar un comentario y una calificación<br>
Para: Compartir mi experiencia con la receta<br>

## Especificación de requerimientos
El usuario debe haber realizado la receta para dejar una puntuación y calificación.<br>
El usuario debe estar registrado.<br>
Si se pone un comentario de manera obligatoria se debe poner una calificación y viceversa.<br>
No se puede utilizar lenguaje ofensivo<br>

## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de comentarios de la receta cuyo funcionamiento es:<br>
El usuario deja un comentario o experiencia al seguir la receta. <br>
Se debe dejar una calificación junto con el comentario, esta calificación va de 0 a 5 estrellas.<br>
Al enviar el comentario será visible para los demás usuarios.<br>

![Alt text](/historias/imagenes/comentarios_receta.png)

## Validación de datos
Dado: <br>
Cuando: <br>
Entonces: <br>

## API’s - Diseño
1. Calificar una receta

Request:
```
POST BASE_URL/api/v1/recipes/{recipe_id}/rate
Content-Type: Application/json
Authorization: Bearer {token}

{
  "calificacion": 4
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Calificación registrada exitosamente."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Calificación inválida",
  "message": "La calificación debe estar entre 1 y 5."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Debe estar autenticado para calificar una receta."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Receta no encontrada",
  "message": "La receta con el ID especificado no existe."
}
```

2. Comentar en una receta

Request:
```
POST BASE_URL/api/v1/recipes/{recipe_id}/comment
Content-Type: Application/json
Authorization: Bearer {token}

{
  "comentario": "¡Me encanta esta receta!"
}
```

Response: Exitoso statusCode: 201
```
{
  "message": "Comentario agregado exitosamente."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Comentario inválido",
  "message": "El comentario no puede estar vacío."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Debe estar autenticado para comentar en una receta."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Receta no encontrada",
  "message": "La receta con el ID especificado no existe."
}
```
