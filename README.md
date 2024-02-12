# T4.2Dev Promesas y Async/Await
---
La aplicación debe acceder a una **API** y mediante **Premesas** y **Async Await** obtener datos y manejarlos.  
Además debe incluir funciones arrow y try catch para el manejo de excepciones.  
## ¿Qué te encuentras en la tarea?
---
En esta aplicación se acceden a dos API's: a la de **Pokemon** [enlace pokeapi](https://pokeapi.co/) y a la de **Rick & Morty** [enlace API Rick&Morty](https://rickandmortyapi.com/).  
### Pokeapi
![logo Pokemon](./img/logoPokemon.png)  
En esta API se hace uso de **fetch** el cual ya devuelve de por sí promesas y se tratan como promesas con **.then o .catch**.  
Consta de unos botones en el header que filtran según el tipo de pokemon que sea: tierra, eléctrico...   
### Rick & Morty  
![logo Rick&Morty](./img/logoRick&Morty.jpg)  
En el acceso a esta API se usa Async Await para la obtención de los datos y para el tratamiento de algunos de estos promesas.  
Consta de unos botones en el header para mostrar: todos los personajes, humanos, aliens...
#### La aplicación se encuentra separada en:  
- Una página inicial que lleva mediante dos botones al tratado de la API de Pockemon o a la de Rick and Morty.  
- Dos páginas, una para cada API.
- Se creó un fichero de CSS y un fichero de JavaScript para cada página.  
- En la página de inicio se selecciona y al clicar en el botón correspondiente se abre una nueva página para no empañar la experiencia de usuario.  
## Acceso a la aplicación
Esta app puede probarse [pinchando aquí]( https://fjlespinha.github.io/T4.2_Dev_Promesas_y_Asyn_Await/)  