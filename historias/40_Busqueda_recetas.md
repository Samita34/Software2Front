# HISTORIA 40
Yo como: Usuario de la página<br>
Quiero: Buscar las recetas de mi interés<br>
Para: Visualizar y encontrar la que más me agrade.<br>

## Especificación de requerimientos
El usuario debe ingresar al menos una palabra para que se muestren los resultados <br>



## Análisis
## Pantalla de búsqueda
A continuación se presenta la pantalla de búsqueda, cuyo funcionamiento es:
El usuario ingresa el nombre de la receta que desea encontrar.<br>

![Alt text](/historias/imagenes/busqueda.png)

## Validación de datos
Dado: Que el nombre está bien escrito<br>
Cuando: El usuario realiza una búsqueda<br>
Entonces: Se muestran los resultados<br>

Dado: Que el no nombre está bien escrito<br>
Cuando: El usuario realiza una búsqueda<br>
Entonces: No se muestran los resultados correctos.<br>

## API’s - Diseño
1. Obtener resultados de búsqueda de recetas

Request:
```
GET BASE_URL/api/v1/search?query={query}
Accept: Application/json
```

Response: Exitoso statusCode: 200
```
{
  "recetas": [
    {
      "idReceta": "101",
      "nombre": "Pique a lo Macho",
      "autor": "Juan Pérez",
      "porciones": 4,
      "tiempoPreparacion": "45 minutos",
      "imagen": "urlImagenReceta1",
      "descripcionCorta": "El Pique Macho es un plato típico de la gastronomía boliviana, específicamente de la región de Cochabamba."
    },
    {
      "idReceta": "102",
      "nombre": "Pique a lo Macho",
      "autor": "Ana García",
      "porciones": 6,
      "tiempoPreparacion": "120 minutos",
      "imagen": "urlImagenReceta2",
      "descripcionCorta": "El Pique Macho es una combinación de carne, vegetales y condimentos, originario de Cochabamba."
    },
  ]
}
```

Response: No encontrado statusCode: 404
```
{
  "error": "No se encontraron resultados para la búsqueda."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Internal Server Error",
  "message": "No se pudo procesar la búsqueda."
}
```

