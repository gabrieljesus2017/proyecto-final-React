# Proyecto React Js e-commerce ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
Este proyecto simula un ecommerce de venta de ropa deportiva. Esta desarrollado en **React Js** mediante el comando **npx create-react-app** y también se usaron varias librerías según las necesidades del proyecto.
Es una **single page application** (SPA) , aplicación web que carga solo un documento web y luego actualiza el contenido del cuerpo de ese documento único. 

## Funcionamiento
En la pagina principal [https://best-commerce-ch.netlify.app/](https://best-commerce-ch.netlify.app/), se muestra un listado de productos los cuales se pueden filtrar por categorías (hoodies, pants, shoes o jackets). Cada producto tiene un botón que al apretarlo nos lleva al detalle de ese producto, donde se puede: leer la descripción, seleccionar la cantidad que queremos añadir al carrito (esta cantidad esta limitada por el stock del producto) y seleccionar el talle del producto. Luego de haber seleccionado la cantidad y el talle podemos añadirlo al carrito haciendo click en "ADD TO CART", si se agrego correctamente aparecerá una alerta verde en la parte de abajo a la derecha de la pantalla.
 Una vez con el o los productos en el carrito,  en la barra de navegación, apretando en el icono del carrito podremos ver el listado de productos seleccionados. Acá podremos eliminar producto por producto en caso de no querer comprarlos, eliminar todos los producto con un solo click o confirmar la compra. 
  Si confirmamos la compra, aparecerá un formulario el cual nos pide datos personales para poder seguir con la compra. Una vez completo el formulario y confirmados nuestros datos, aparecerá un botón ("See Ticket") que al hacer clcik va a mostrar los datos de la compra y el comprador.
  El ticket muestra: 
  
 1. Id de compra
 2. Nombre del comprador
 3. Email del comprador
 4. Teléfono del comprador
 5. Fecha en la que se realizo la compra
 6. Listado de productos comprados, con cantidad de unidades y precio total
 7. Cantidad total de productos
 8. Precio total de la compra
 
 ![funcionamiento](https://user-images.githubusercontent.com/104010103/203831615-f3dd6458-d4d6-4155-a812-7ba198be039c.gif)

 
 ## Instalación

- Para empezar el proyecto usamos: 
> npx create-react-app my-app
- Para empezar a correr la aplicación en el [localhost:3000](http://localhost:3000/) y verla en el navegador
> npm start
- Para instalar Tailwind Css
> npm install -D tailwindcss
- Para instalar React Router 
> npm install react-router-dom
- Para instalar luxon
> npm install luxon
- Para instalar Firebase
> npm install firebase
- Para instalar React Icons
> npm  install react-icons
- Para instalar React Toastify 
> npm install react-toastify

## Librerías / Tecnologías y utilidades usadas en el proyecto

 - ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) [React Router](https://reactrouter.com/en/main) 

    Esta librería fue usada para el manejo dinámico de las rutas de la página
 
 - ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) [Tailwind Css](https://tailwindcss.com/)

   Este framework fue instalado para hacer más rápida la maquetación de la página
  
 - [Luxon](https://moment.github.io/luxon/#/)

   Fue instalado para el un manejo más fácil de las fechas y también para generarlas más fácil
 
 - ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) [Firebase](https://firebase.google.com/?hl=es-419&gclid=CjwKCAiApvebBhAvEiwAe7mHSF3Z-yK9Z9o8bfGAOv8YE50k52Vft-S9H1OgXuf3l_wF3hWda6-mvhoCzYgQAvD_BwE&gclsrc=aw.ds)
 
    Firebase brinda a la página la base de datos que usamos para mostrar los productos y también es a donde se envían las ordenes de compra
 
 - [React Icons](https://react-icons.github.io/react-icons/)

   Proporciona los iconos utilizados en la página 
 
 - [React toastify](https://github.com/fkhadra/react-toastify#readme)

   Proporciona las alertas al hacer click en algunos botones 

## Link del proyecto
 - [Best-commerce](https://best-commerce-ch.netlify.app/)

