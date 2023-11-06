# HISTORIA 90 
Yo como: Usuario de la página <br>
Quiero: Crear mi lista de compras personalizada<br>
Para: Realizar las recetas <br>

## Especificación de requerimientos
1. <br>
## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de lista de compras cuyo funcionamiento es:<br>
El usuario crea una nueva lista de compras donde puede dividir esta misma en las distintas categorías.<br>

![Alt text](/historias/imagenes/crea_lista_compras.png)

## Validación de datos
Dado: Que se añadieron nuevos productos<br>
Cuando: El usuario creó una nueva lista de compras<br>
Entonces: Los productos se guardaron <br>
 
## API’s - Diseño
1. Obtener una lista de compras específica

Request:
```
GET BASE_URL/api/v1/shoppinglist/{list_id}
Accept: Application/json
Authorization: Bearer {token}
```

Response: Exitoso statusCode: 200
```
{
  "idLista": "{list_id}",
  "tituloLista": "Lista de compras 1",
  "secciones": [
    {
      "categoria": "Verduras",
      "items": [
        {
          "hecho": false,
          "producto": "Cebolla",
          "cantidad": 5,
          "unidad": "lb",
          "marca": ""
        },
      ]
    },
    {
      "categoria": "Carne",
      "items": [
        {
          "hecho": false,
          "producto": "Pollo",
          "cantidad": 1,
          "unidad": "kg",
          "marca": ""
        },
      ]
    }
  ]
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión para acceder a esta lista."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Lista no encontrada",
  "message": "La lista de compras con el ID proporcionado no existe."
}
```

2. Añadir una nueva lista de compras

Request:
```
POST BASE_URL/api/v1/shoppinglist
Content-Type: Application/json
Authorization: Bearer {token}

{
  "tituloLista": "Lista de compras nueva",
  "secciones": [
    {
      "categoria": "Pescado",
      "items": [
        {
          "producto": "Salmón",
          "cantidad": 2,
          "unidad": "kg",
          "marca": "Marca X"
        }
      ]
    }
  ]
}
```

Response: Exitoso statusCode: 201
```
{
  "idLista": "nuevo_list_id",
  "message": "Nueva lista de compras creada exitosamente."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Datos inválidos",
  "message": "La información proporcionada para la nueva lista es incorrecta o está incompleta."
}
```

Response: Error statusCode: 401 (Unauthorized)
```
{
  "error": "No autorizado",
  "message": "Es necesario iniciar sesión para crear una nueva lista."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "No se pudo crear la nueva lista de compras."
}
```


