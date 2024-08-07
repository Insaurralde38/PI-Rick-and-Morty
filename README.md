<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Proyecto Integrador | [**Rick and Morty**](https://rick-and-morty-insa.vercel.app/)

<p align="center">
  <img src="https://www.evilsocket.net/images/2017/04/head.jpeg" />
</p>

<div align="center">

## **📌 TECNOLOGÍAS UTILIZADAS**

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-E46625?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-385BF4?style=flat-square&logo=css3)
[![React](https://img.shields.io/badge/-React-black?style=flat-square&logo=react&link=https://es.react.dev/)](https://es.react.dev/)
[![Redux](https://img.shields.io/badge/Redux-%237241BE.svg?style=flat-square&logo=redux&logoColor=white&link=https://es.redux.js.org/)](https://es.redux.js.org/)
[![Node.js](https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=Node.js&link=https://nodejs.org/es)](https://nodejs.org/es)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square&logo=express&logoColor=white&link=https://expressjs.com/es/)](https://expressjs.com/es/)
[![Sequelize](https://img.shields.io/badge/Sequelize-31396A?style=flat-square&logo=Sequelize&logoColor=68AEE8&link=https://sequelize.org/)](https://sequelize.org/)
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-%23404d59?style=flat-square&logo=postgresql&logoColor=%2361DAFB&link=https://www.postgresql.org/)](https://www.postgresql.org/)
[![Vercel](https://img.shields.io/badge/-Vercel-black?style=flat-square&logo=vercel&link=https://vercel.com/)](https://vercel.com/)
[![Render](https://img.shields.io/badge/-Render-black?style=flat-square&logo=render&link=https://render.com/)](https://render.com/)

</div>

---

<div align="center">

## **📋 DESCRIPCIÓN**

</div>

Es una aplicación en la cual se puedan ver los distintos personajes de la serie de TV **`Rick and Morty`** utilizando la API externa [The Rick and Morty API](https://rickandmortyapi.com/) y a partir de ella poder, entre otras cosas:

  - **Buscar personajes por ID**
  - **Añadir a favoritos**
  - **Filtrar y ordenar favoritos**

Sí deseas ingresar al deploy del proyecto, puedes utilizar el siguiente usuario genérico:

-  **E-Mail**: `user@mail.com`
-  **Password**: `Abcd1234`

---

<div align="center">

## **⚠️ IMPORTANTE!**

</div>

Es necesario contar mínimamente con la última versión estable de **Node.js** y **npm**. Asegúrate de contar con ella para poder instalar correctamente las dependencias necesarias para correr el proyecto. Actualmente las versiones necesarias son:

-  **Node.js**: 12.18.3 o mayor
-  **npm**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

   ```bash
   node -v
   npm -v
   ```

---

<div align="center">

## **⚙️ INSTALACIÓN Y USO**

</div>

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Insaurralde38/PI-Rick-and-Morty.git
   cd PI-Rick-and-Morty
   ```

2. **Instalar dependencias**:

    Asegúrate de tener **Node.js** y **npm** instalados en tu sistema. Luego, instala lasdependencias de los archivos **`package.json`** tanto del Back-End, como del Front-End. Para elloes necesario que abras una terminal ubicado dentro de la carpeta **`Client`** y otra terminalubicado dentro de la carpeta **`Server`**.

   ```bash
   npm install
   ```

3. **Añadir variables de entorno**:

    En la carpeta **`Server`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
   DB_USER=usuariodepostgres
   DB_PASSWORD=passwordDePostgres
   DB_HOST=localhost
   ```

    Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo no está incluido en este repositorio de github, ya que las credenciales son información sensible.

2. **Crear base de datos**:

    Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`rickandmorty`**. Si no realizas este paso de manera manual no podrás visualizar el proyecto de manera local.

5. **Añadir variables de entorno**:

    Para visualizar la aplicación desde el navegador, en ambas terminales previamente abiertas, debes ejecutar el comando:

   ```bash
   npm start
   ```

    Ingresando a <http://localhost:3000> desde el navegador, podrás ver el proyecto en tiempo real

---

<div align="center">

## **📖 ENDPOINTS UTILIZADOS**

</div>

-  [**The Rick and Morty API**](https://rickandmortyapi.com/api/character/)
-  **Por id**: _"https://rickandmortyapi.com/api/character/{id}"_

---

<div align="center">

## **📁 DETALLES**

</div>

### **🖱 FRONT-END**

Se desarrollo una aplicación de React/Redux que contiene:

**📍 LANDING PAGE |**

-  Una imagen de fondo representativa del proyecto.
-  Un formulario para iniciar sesión e ingresar a **`HOME PAGE`**. Cuenta con los siguientes campos:

    -  E-Mail
    -  Contraseña
    -  Botón para subir la información.

> [**IMPORANTE**]: el formulario está validado sólo con JavaScript.

**📍 HOME PAGE |** La página principal de la Single Page Application contiene:

-  **NavBar:** Una barra de navegación para recorrer el resto del proyecto.
-  Sector en el que se ve el listado de cards con los personajes buscados en SearchBar. Cuando se le hace click en la imagen posterior de una Card, redirige al detalle de ese personaje específico.

**📍 NAV BAR |** Barra de navegación que contiene:

-  **SearchBar:** un input de búsqueda para encontrar personajes por ID. La búsqueda será exitosa siempre y cuando el valor ingresado esté dentro del rango de valores disponibles **`( 1 – 826 )`**.
-  **Add Random:** Realiza una búsqueda de un ID al azar, obviando los previamente buscados.
-  **Favorites:** Redirige a la página de favoritos.
-  **About:** Redirige a la página de detalles del autor del proyecto. <img src="./Client/src/components/Assets/boke-chimp.png" alt="chimp" height="21" width="21" style="margin: 0px 0px -4px 0px" >
-  **Light/Dark Toggle:** Permite cambiar de tema claro a tema oscuro y viceversa.
-  **Pickle Rick:** Al hacer hover sobre la imagen reproduce audios de este personaje.

**📍 DETAIL PAGE |** En esta página se muestra toda la información específica de un personaje:

-  Imagen
-  Nombre
-  Estado
-  Genero
-  Origen

**📍 FAVORITES |** La página que muestra todos los personajes añadidos a favoritos contiene:

-  Sector en el que se ve el listado de cards con los personajes añadidos a favoritos. Se visualizan de igual manera que en **`HOME PAGE`**.
-  Cuando se le hace click a una Card redirige al detalle de ese personaje específico.
-  Botones/Opciones para **filtrar** por genero.
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente los personajes por orden de ID.

**📍 ABOUT |** La página que muestra información del autor del proyecto contiene:

-  Una imagen de fondo alusiva al proyecto, con sonido de fondo. 🌞
-  Una card con datos del autor del proyecto, dividida en 3 secciones:
    -  **Acerca de mí:** Contiene una imagen caricaturizada al estilo Rick and Morty, una breve reseña y links de diferentes redes sociales.
    -  **Experiencia:** Información laboral, previa al ingreso al mundo tech.
    -  **Contacto:** Información con distintos métodos de contacto con el autor del proyecto.

---

### **🖱 BACK-END**

Se desarrollo un servidor en Node.js/Express con las siguientes rutas:

#### **📍 GET | /login**

-  Obtiene la información de un usuario desde la base de datos.

#### **📍 POST | /login**

- Permite agregar un usuario a la base de datos.

#### **📍 GET | /character/:id**

-  Obtiene el detalle de un personaje en particular.

#### **📍 POST | /fav**

-  Permite añadir un personaje a la lista de favoritos.

#### **📍 DELETE | /fav/:id**

-  Permite eliminar un personaje de la lista de favoritos.

---

### **🖱 BASE DE DATOS**

Son 2 modelos de base de datos. Uno para la adición de favoritos y otra para crear usuarios para ingresar al proyecto. A continuación las propiedades que tiene cada modelo:

**📍 FAVORITE**

-  ID
-  Nombre
-  Imagen
-  Estado
-  Especie
-  Genero
-  Origen

**📍 USER**

-  ID
-  E-Mail
-  Contraseña

---

<div align="end">

Hecho con <img src="./Client/src/components/Assets/boke-heart.png" alt="heart" height="14" width="16" style="margin: 0px 0px -2.5px 0px" > por [**DIEGO INSAURRALDE**](https://insaurralde.vercel.app/) <img src="./Client/src/components/Assets/boke-chimp.png" alt="chimp" height="21" width="21" style="margin: 0px 0px -4px 0px" >

</div>