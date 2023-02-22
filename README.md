# Examen Prog Multimedial 3ro ( y 4to por excepción ) (2022-2023)

El objetivo de este examen es que el alumno pueda demostrar conocimientos sobre: ES6 (template literals, arrow functions, destructuring, map, etc), ReactJs, NextJs (next/router, next/link, next/image), useState, useEffect, async/await, axios.
Se valora el uso de buenas prácticas, sugar syntax, eficiencia en el código, reutilización de código, captura de errores, UX/UI, legibilidad y - USO DE PADDINGS/MARGINS! XD - 

## Tiempo estimado de resolución
3 hrs.

## Objetivos

1. Component Show
- Crear un functional component llamado Show que reciba como prop un id (integer). 
- El mismo funcionará a modo de card, mostando: image.original , name, genres, rating.average, + un dato a elección. 
- Al montarse el componente deberá hacer un request a https://api.tvmaze.com/shows/[id]. El request deberá ser mediante AXIOS (async/await) utilizando try/catch para controlar la respuesta. 
- El objeto obtenido en el request deberá almacenarse en el estado del componente.
- Los estilos para el maquetado del compoenente deben estar en un archivo llamado Show.module.css en la carpeta del compoenente.
- Contemplar el uso de Loadings en el request.
- Incluir un Link (next/link) a modo de botón que lleve a /shows/[id].

2. Component FeaturedShows
- Crear un functional component llamado Featured Shows, el cual contenga una grilla (pueden utilizar .grid y .col_4 incluidas en grid.css) de 3 columnas, la cual muestre 3 Shows utilizando el componente del punto anterior.
- Incluir el title (h2) "Featured Shows"
- Desplegar este componente en la home page debajo del Hero.

3. Page /shows/[id]
- Crear una página /shows/[id].js que obtenga mediante Next Router (useRouter, router.query) el id correspondiente al show y al montarse, llame a la funcion handleGetShowData la cual hace un request a https://api.tvmaze.com/shows/[id] (idem punto 1.). Esta vez la información a mostrar del show será: name, language, status, ended (se puede formatear la fecha utilizando day.js), rating, image.original, summary.
- En una segunda sección, debe mostrar los actores que se obtienen al hacer un request a https://api.tvmaze.com/shows/[id]/cast. Se debe incluir el person.name, person.country.name, person.image.medium, person.character.name.

4. Component Search
- Utilizar el formulario dado para realizar requests al endpoint https://api.tvmaze.com/search/shows?q=[nombre_show].
- Utilizar el componente Show del punto 1. para mostrar una grilla de 4 columnas con los resultados de la búsqueda.
- Agregar este componente a modo de section en la home, bajo el titulo de "Search your show"

5. Navbar
- Crear un Next link a /about
- Completar esa página con los datos del alumno.

6. Styles
- Estilar los componentes y paginas creadas utilizando breakpoints en 768 y 480 px.

7. Pushear a github y crear el proyecto en Vercel.

## Getting Started

First, run the development server:

```bash
yarn 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.