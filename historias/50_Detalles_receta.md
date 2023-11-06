# HISTORIA 50
Yo como: Usuario de la página<br>
Quiero: Visualizar los detalles de la receta que seleccioné<br>
Para: Leer la descripción y los ingredientes para la preparación<br>

## Especificación de requerimientos


## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de detalles de la receta cuyo funcionamiento es:
El usuario ingresa a una receta para ver más detalles<br>
Se pueden ver los valores nutricionales de cada ingrediente de la receta<br>
La preparación, el tiempo aproximado que toma la receta y para cuantas personas está hecha.<br>
Se puede guardar la receta, siempre y cuando el usuario tenga una cuenta. <br>

![Alt text](/historias/imagenes/detalles_receta.png)

## Validación de datos
Dado:<br>
Cuando: <br>
Entonces: <br>

## API’s - Diseño
1. Obtener una receta específica

Request:
```
GET  BASE_URL/api/v1/recipes/{recipe_id}
Accept: Application/json
```

Response: Exitoso statusCode: 200
```
{
  "idReceta": "id_del_pique_macho",
  "nombre": "Pique Macho",
  "autor": "Diego Luna",
  "categoria": "Nacional",
  "calificacionPromedio": 4.5,
  "votos": 150,
  "ingredientes": [
    {
      "ingrediente": "500 gramos de carne de res en cubos",
      "cantidad": "500g",
      "unidad": "gramos"
    },
    // Más ingredientes...
  ],
  "preparacion": [
    "En una sartén grande, calentar el aceite a fuego medio...",
    // Más pasos de preparación...
  ],
  "comentarios": [
    {
      "usuario": "Juan Pérez",
      "comentario": "¡A mi parecer!",
      "calificacion": 5,
      "fecha": "2023-11-01T12:34:56Z"
    },
  ]
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Receta no encontrada",
  "message": "La receta solicitada no existe o ha sido eliminada."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Internal Server Error",
  "message": "Ocurrió un error al intentar obtener los detalles de la receta."
}
```


