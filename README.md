# Cineverse

![cover-image](https://cineverse-beta.vercel.app/cover.png)

Este proyecto ha sido desarrollado como parte de una prueba técnica para FrontEnd Developer, enfocado en emular la experiencia de visualizar contenido multimedia tipo videos. La aplicación permite a los usuarios registrarse, iniciar sesión y explorar una amplia variedad de películas y series con un sistema de scroll infinito, organizadas por popularidad y filtrables por 5 categorías diferentes, todo ello gracias a la integración con la API TMDB.

## Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Estilos**: Tailwind CSS
- **Framework de UI**: NextUI
- **Animaciones**: Framer Motion
- **Llamadas API**: Axios
- **API de Contenidos**: TMDB (The Movie Database)
- **Autenticación**: Clerk
- **Gestión de Formularios**: React Hook Form con validación utilizando Zod

## Instalación y Ejecución Local

Para comenzar a trabajar con este proyecto en tu entorno local, simplemente sigue estos pasos:

1. Clona el repositorio a tu equipo.
2. Abre la terminal, navega hasta el directorio del proyecto e instala las dependencias con el comando `npm install`.
3. Crear Cuentas en [Clerk](https://clerk.com/) y [TMDB](https://www.themoviedb.org/): Para que la autenticación y la obtención de contenido multimedia funcionen correctamente, necesitarás crear cuentas en Clerk y TMDB. Regístrate y obtén las claves de API necesarias para estos servicios.
4. Crea un archivo `.env` siguiendo el formato del archivo `.env.example` para configurar las variables de entorno obtenidas de Clerk y TMDB.
5. Ejecuta `npm run dev` para iniciar el servidor de desarrollo. Abre `http://localhost:3000` en tu navegador para ver la aplicación.
