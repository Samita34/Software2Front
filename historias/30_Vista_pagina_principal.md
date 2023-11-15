# HISTORIA 30
Yo como: Usuario de la página<br>
Quiero: Visualizar la página principal donde se encuentran las recetas populares, sugerencias y categorías<br>
Para: Ver los detalles de la receta y guardar estas.<br>

## Especificación de requerimientos
 

## Análisis
### Pantalla de inicio
A continuación se presenta la pantalla de inicio, cuyo funcionamiento es:
El usuario puede observar distintas recetas, entre las cuales se encuentran las más populares, sugerencias y distintas categorías.<br>
El usuario puede ingresar en la que desee para ver los detalles.<br>
También cuenta con una barra de búsqueda y un navbar que permite el acceso rápido a otras funciones.<br>

![Alt text](/historias/imagenes/home.png)

## Validación de datos
Dado: <br>
Cuando: <br>
Entonces: <br>


## API’s - Diseño
1. Obtener recetas para la página de inicio

Request:
```
GET BASE_URL/api/v1/home
Accept: Application/json
```

Response: Exitoso statusCode: 200
```
{
  "populares": [
    {
      "idReceta": "001",
      "nombre": "Trucha",
      "imagen": "urlImagenTrucha",
      "descripcionCorta": "Trucha asada al estilo mediterráneo."
    },
    {
      "idReceta": "002",
      "nombre": "Sushi",
      "imagen": "urlImagenSushi",
      "descripcionCorta": "Surtido de sushi con pescado fresco."
    },
  ],
  "sugerencias": [
    {
      "idReceta": "003",
      "nombre": "Pollo al curry",
      "imagen": "urlImagenPolloCurry",
      "descripcionCorta": "Curry aromático con trozos de pollo."
    },
    {
      "idReceta": "004",
      "nombre": "Pollo al horno",
      "imagen": "urlImagenPolloHorno",
      "descripcionCorta": "Pollo al horno con hierbas provenzales."
    },
  ]
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Internal Server Error",
  "message": "No se pudo obtener la información de las recetas."
}
```
## Tabla de base de datos
### Queries
1. **Página de Inicio (Búsqueda de recetas):**
     SELECT * FROM Recetas;
