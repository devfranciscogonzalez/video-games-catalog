<div align='center'>
  
   [![video-games-catalog](https://i.postimg.cc/qvSfKTHz/New-Project.png)](https://video-games-catalog.vercel.app/)

  <h1>Catálogo de Videojuegos</h1>

 👉 [Ir a la página web](https://video-games-catalog.vercel.app/)

  <i>Desarrollado con las siguientes tecnologías:</i>

  <div>

 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
 ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
</div>

## Descripción General

Este proyecto es un catálogo que permite a los usuarios explorar la base de datos más grande de videojuegos, ordenados de mayor a menor puntuación según Metacritic. Además, ofrece la capacidad de filtrar por año, género, plataformas, tags y empresa desarrolladora, y una funcionalidad de búsqueda que permite encontrar videojuegos por texto. Cada videojuego tiene una página de detalles que muestra información relevante como el título, género, puntuación, portada, plataformas, año de lanzamiento y trailers.

## Tecnologías Utilizadas

- **Frontend**: ReactJS, CSS
- **Cliente HTTP**: Axios
- **Enrutador**: React Router
- **Despliegue**: Vercel
- **API de datos**: [RAWG Video Games Database](https://rawg.io/apidocs)

## Estructura del Proyecto

El proyecto sigue una estructura organizada en diferentes carpetas y archivos para garantizar la mantenibilidad y la escalabilidad:

### Adapters

- `adaptGameDetails.js`: Adapta los detalles de un videojuego obtenidos de la API para el formato de la aplicación.
- `adaptGames.js`: Adapta la lista de videojuegos de la API para su uso en la aplicación.

### Assets

- `icons`, `image`: Contienen los recursos gráficos e íconos utilizados en la aplicación.

### Components

- `ErrorMessage`: Muestra mensajes de error personalizados.
- `FilterPanel`: Componente que contiene los filtros de búsqueda.
- `Footer`: Pie de página de la aplicación.
- `GameCard`: Tarjeta que muestra información resumida de un videojuego.
- `GameList`: Lista de tarjetas de videojuegos.
- `Image`: Componente reutilizable para mostrar imágenes.
- `Layout`: Contenedor general de la aplicación.
- `Loader`: Indicador de carga para cuando los datos están siendo obtenidos.
- `NavBar`: Barra de navegación.
- `Pagination`: Componente para la navegación de páginas.
- `Score`: Muestra la puntuación de un videojuego.
- `SearchPanel`: Campo de búsqueda de videojuegos.
- `SelectFilter`: Componente de selección para los filtros.
- `Trailer`: Muestra los trailers de los videojuegos.
- `index.js`: Archivo que re-exporta todos los componentes (barrel).

### Constants

- `errorMessages.js`: Contiene mensajes de error predefinidos.
- `filterDefaults.js`: Contiene configuraciones predeterminadas para los filtros.

### Hooks

- `useFetchFilterOption.js`: Hook para obtener las opciones de los filtros desde la API.
- `useFetchGameDetail.js`: Hook para obtener los detalles de un videojuego específico.
- `useFetchGames.js`: Hook para obtener la lista de videojuegos.

### Pages

- `ErrorPage`: Página de error para manejar rutas no encontradas o errores en la carga.
- `GameDetail`: Página de detalle de un videojuego.
- `Home`: Página de inicio que muestra la lista de videojuegos y el panel de filtros.

### Services

- `api/httpClient.js`: Configuración del cliente HTTP para hacer llamadas a la API.
- `filter.js`: Servicios relacionados con el filtrado de juegos.
- `games.js`: Lógica para la obtención de la lista de videojuegos.
- `gamesDetails.js`: Lógica para la obtención de detalles de un videojuego.
- `searchGames.js`: Servicio para la búsqueda de videojuegos.

### Styles

- `global.css`: Estilos globales de la aplicación.
- `variables.css`: Variables de CSS para colores y otros valores reutilizables.

### Utils

- `storage.js`: Utilidad para manejar almacenamiento local o de sesión.

### Archivos Principales

- `App.jsx`: Componente principal que maneja el enrutamiento y la estructura de la aplicación.
- `main.jsx`: Punto de entrada de la aplicación que inicia el renderizado de React.
