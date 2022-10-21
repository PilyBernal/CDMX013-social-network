# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño del proyecto](#3-diseño-del-proyecto)
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Hacker edition](#5-hacker-edition)
* [6. Entrega](#6-entrega)

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos**.

## 3. Diseño del proyecto

#### Primer propuesta para iniciar a trabajar en el diseño

![Primer_propuesta](/src/Images/Primer_propuesta.png)

#### Opciones de color para el nombre de la Red Social

![Opciones_nombre](/src/Images/Opciones_nombre.png)

#### Prototipo de baja fidelidad

![Prototipo_baja](/src/Images/Prototipo_baja.png)

#### Prototipo alta fidelidad

![Prototipo_alta](/src/Images/Prototipo_alta.png)

## 4. Criteriosde aceptación mínimos del proyecto

### 4.1 Historias de usuario.
La primera historia de usuario la creamos pensando que pudiera registarse usando email y contraseña. "Yo como usuario quiero poder crear una cuenta con mi correo y contraseña para poder ingresar a la red social LOTO" usamos la base de datos de Firebase y pusimos botones para poder acceder a dicha acción.asi mismo limitamos la contrasela a número de caracteres y es necesario usar caracteres especiales, hay un aviso en la parte del registro donde el usuario puede ver dicho requerimiento.
La segunda historia de usuario la pensamos dando la opción de poder entrar como usuario ya registrado, y hacer el login con el correo y contraseña de no coincidir la misma aplicación no deja que el usuario ingrese al home de LOTO
Nuestra siguiente Historia de usuario consistión en que poder generar los post , creamos un div para cada uno usando el forEach y así se generarían los divs de cada uno.
Por ultimo trabajamos la Historia de usuario pra poder dar like y borrar los post, esta en proceso hacer que se individualice a cada usuario.
Para que nuestro usurio pudiera crear post creamos la tercera historia de usuario donde el usuario
 ent
## 5. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).

* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 6. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

***
