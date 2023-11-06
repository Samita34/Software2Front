# HISTORIA 70 
Yo como: Usuario de la página y escritor de recetas<br>
Quiero: Publicar una receta <br>
Para: Compartirla con los demás usuarios<br>

## Especificación de requerimientos
El usuario debe llenar todos los campos:<br>
Nombre de receta<br>
Ingredientes<br>
Preparación<br>
Seleccionar una categoría<br>
Número de porciones <br>
Tiempo de preparación<br>
El usuario debe subir una foto de la receta completada, la resolución debe ser de 30 ppi. El tamaño máximo de una imagen 1024 x 2567, aspect ratio de 16:9. Archivos JPG.<br>
## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de recetas guardadas cuyo funcionamiento es:<br>
El usuario que escribe la receta llena los campos correspondientes.<br>
Se puede añadir una imagen del resultado de la receta que debe estar preparada.<br>

![Alt text](/historias/imagenes/publicar_receta.png)

## Validación de datos
Dado: Que se llenaron todos los campos<br>
Cuando: El usuario desea publicar una receta<br>
Entonces: La receta puede ser publicada <br>

## API’s - Diseño
1. Publicar una nueva receta

Request:
```
POST BASE_URL/api/v1/uploadrecipe
Content-Type: multipart/form-data
Authorization: Bearer {token}

{
  "nombre": "Pollo al horno",
  "categoria": "CategoriaSeleccionada", 
  "porciones": 4,
  "tiempoPreparacion": "45 minutos",
  "ingredientes": [
    {
      "nombre": "pollo entero",
      "cantidad": 1,
      "unidad": "unidad",
      "calorias": 50
    },
    {
      "nombre": "tomate",
      "cantidad": 3,
      "unidad": "unidad",
      "calorias": 30
    },
  ],
  "preparacion": "Texto detallado de los pasos de preparación...",
  "imagen": "ArchivoDeImagen.jpg"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Receta publicada exitosamente.",
  "idReceta": "123456", 
  "urlReceta": "BASE_URL/recipes/123456" 
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Datos inválidos",
  "message": "Falta información necesaria o el formato de los datos no es correcto."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión para publicar una receta."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo procesar la subida de la receta."
}
```

