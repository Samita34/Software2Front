# HISTORIA 60
Yo como: Usuario de la página<br>
Quiero:Guardar mis recetas favoritas<br>
Para: Utilizarlas más tarde<br>

## Especificación de requerimientos
El usuario debe estar registrado.<br>


## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de recetas guardadas cuyo funcionamiento es:<br>
El usuario guarda una receta en los detalles de esta.<br>
Para eliminar de guardados debe entrar a los detalles y desmarcar <br>

![Alt text](/historias/imagenes/recetas_guardadas.png)

## Validación de datos
Dado: Que se guarda la receta<br>
Cuando: Al usuario le interesa<br>
Entonces: La receta aparece en la sección de guardados<br>

## API’s - Diseño
1. Obtener la lista de recetas favoritas del usuario

Request:
```
GET  BASE_URL/api/v1/favorites
Accept: Application/json
Authorization: Bearer {token}
```

Response: Exitoso statusCode: 200
```
{
  "favoritos": [
    {
      "idReceta": "001",
      "nombre": "Pique macho",
      "autor": "Juan Perez",
      "porciones": 4,
      "tiempoPreparacion": "45 minutos",
      "imagen": "urlImagenPiqueMacho",
      "descripcionCorta": "El Pique Macho es un plato típico de la gastronomía boliviana, específicamente de la región de Cochabamba."
    },
  ]
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión para acceder a los favoritos."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Favoritos no encontrados",
  "message": "No se encontraron recetas en la lista de favoritos."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo recuperar la lista de favoritos."
}
```



