# HISTORIA 80 
Yo como: Usuario de la página y escritor de recetas<br>
Quiero: Editar la receta que publiqué<br>
Para: Arreglar <br>

## Especificación de requerimientos
El usuario debe llenar todos los campos:<br>
Nombre de receta<br>
Ingredientes<br>
Preparación<br>
Seleccionar una categoría<br>
Número de porciones <br>
Tiempo de preparación<br>
El usuario debe subir una foto de la receta completada, la resolución debe ser de 30 ppi. El tamaño máximo de una imagen 1024 x 2567, aspect ratio de 4:3. Archivos JPG.<br>
## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de recetas guardadas cuyo funcionamiento es:<br>
El usuario que escribe la receta cambia los datos necesarios.<br>
El usuario guarda los cambios realizados (adicionar elementos o quitar)<br>
También el usuario puede eliminar toda la receta.<br>

![Alt text](/historias/imagenes/editar_receta.png)

## Validación de datos
Dado: Que se cambiaron los campos<br>
Cuando: El usuario editar la receta y se guardaron<br>
Entonces: Los cambios se hacen visibles <br>

## API’s - Diseño
1. Editar una receta existente

Request:
```
PUT BASE_URL/api/v1/recipes/{recipe_id}/edit
Content-Type: multipart/form-data
Authorization: Bearer {token}

{
  "nombre": "Pollo al horno actualizado",
  "categoria": "NuevaCategoria", 
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
      "nombre": "salchicha",
      "cantidad": 5,
      "unidad": "unidad",
      "calorias": 40
    },
  ],
  "preparacion": "Texto actualizado de los pasos de preparación...",
  "imagen": "ArchivoDeImagen.jpg"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Receta actualizada exitosamente.",
  "idReceta": "id_del_pollo_al_horno"
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Datos inválidos",
  "message": "La información proporcionada es incorrecta o incompleta."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión o tener permisos para editar esta receta."
}
```

Response: Error statusCode: 403 (Forbidden)
```
{
  "error": "Prohibido",
  "message": "No tiene permisos para editar esta receta."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Receta no encontrada",
  "message": "La receta con el ID especificado no existe o ha sido eliminada."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo procesar la actualización de la receta."
}
```


