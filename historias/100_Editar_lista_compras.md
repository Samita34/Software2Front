# HISTORIA 100
Yo como: Usuario de la página <br>
Quiero: Editar mi lista de compras<br>
Para: Realizar los cambios necesarios o eliminar productos <br>

## Especificación de requerimientos
El usuario debe tener al menos una lista con productos<br>
## Análisis
### Pantalla de detalles
A continuación se presenta la pantalla de lista de compras cuyo funcionamiento es:<br>
El usuario elimina o añade productos a su lista personalizada<br>
El usuario también puede eliminar la lista completa.<br>

![Alt text](/historias/imagenes/editar_lista_compras.png)

## Validación de datos
Dado: Que se modificaron productos<br>
Cuando: El usuario editó la lista de compras<br>
Entonces: En la lista se guardan los cambios <br>

## API’s - Diseño
1. Agregar un nuevo ingrediente a una categoría específica de la lista de compras

Request:
```
POST BASE_URL/v1/shoppinglist/{list_id}/add
Content-Type: Application/json
Authorization: Bearer {token}

{
  "categoria": "Nueva categoría",
  "producto": "Producto 1",
  "cantidad": 2,
  "unidad": "kg",
  "marca": "Marca opcional"
}
```

Response: Exitoso statusCode: 201
```
{
  "message": "Ingrediente añadido a la lista de compras exitosamente."
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
  "message": "Se requiere autenticación para realizar esta acción."
}
```

Response: Error statusCode: 403 (Forbidden)
```
{
  "error": "Prohibido",
  "message": "No tienes permiso para añadir ingredientes a esta lista de compras."
}
```

Response: Error statusCode: 404 (Not Found)
```
{
  "error": "Lista no encontrada",
  "message": "No se encontró la lista de compras con el ID proporcionado."
}
```

Response: Error statusCode: 500 (Internal Server Error)
```
{
  "error": "Error del servidor",
  "message": "Hubo un problema al añadir el ingrediente a la lista de compras."
}
```

2. Eliminar un ingrediente específico de la lista de compras

Request:
```
DELETE BASE_URL/api/v1/shoppinglist/{list_id}/edit/{ingredient_id}
Authorization: Bearer {token}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Ingrediente eliminado exitosamente de la lista de compras."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Petición inválida",
  "message": "No se pudo procesar la solicitud de eliminación."
}
```

3. Actualizar un ingrediente específico de la lista de compras

Request:
```
PUT BASE_URL/api/v1/shoppinglist/{list_id}/edit/{ingredient_id}
Content-Type: Application/json
Authorization: Bearer {token}

{
  "producto": "Producto actualizado",
  "cantidad": 3,
  "unidad": "kg",
  "marca": "Nueva Marca"
}
```

Response: Exitoso statusCode: 200
```
{
  "message": "Ingrediente actualizado exitosamente en la lista de compras."
}
```

Response: Error statusCode: 400 (Bad Request)
```
{
  "error": "Datos inválidos",
  "message": "La información proporcionada es incorrecta o está incompleta."
}
```