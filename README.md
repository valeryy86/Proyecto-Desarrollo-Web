# Proyecto-Desarrollo-Web

## Descripción del proyecto:
Ésta pagina web es una tienda virtual de cosméticos, basado en mi emprendimiento **Sky-V Cosmetics**. Está pensada para aquellas personas interesadas en comprar maquillaje, productos corporales y capilares, ya sea para uso propio o algún regalo. 

La página web cuenta con las marcas que manejamos y los productos de ellas (en el momento solo se ven algunos productos). Esto ayuda a que las personas sepan de entrada cuales son las marcas que puede encontrar con nosotros y lo productos disponibles de cada una; para hacer sus compras mas eficientes y directas. También cuenta con el contacto, donde puede comunicarse a las redes sociales para cotizar sus pedidos y realizar sus compras.

## Link de Vercel:
https://proyecto-desarrollo-web-alpha.vercel.app

## Decisiones técnicas:

### ¿Dónde usaste Flexbox y dónde Grid, y por qué en cada caso?
- En la barra de navegación, en el footer y en la sección del catálogo se combinaron ambas tecnologías:

En la barra de navegación, Grid se utilizó para dividir el contenedor principal en distintas secciones (logo, botón hamburguesa y lista de navegación), mientras que Flexbox se utilizó en el interior de cada sección para alinear los elementos de forma horizontal, controlar los espacios y mantener el centrado vertical, haciendo que se vea bien estructurado todo.

En el footer, Grid se utilizó para estructurar todo el pie de pagina en las 4 columnas de información y la franja horizontal de abajo de copyright, mientras que Flexbox se usó en el interior de cada columna para organizar la información verticalmente.

En la sección del catálogo, Grid se utilizo para hacer que la estructura de las tarjetas de los productos fuera responsiva, calculando la cantidad de columnas según el dispositivo en el que esté. Y Flexbox se utilizó tanto para organizar horizontalmente los botones de la barra de los filtros, como para distribuir la información de cada tarjeta verticalmente.

- En la sección de marcas se utilizó Grid para organizar los titulos (maquillaje o capilares) y los logos de cada marca según el tamaño del dispositivo, principalmente de a 4 columnas en escritorio y 2 cuando sea un dispositivo más pequeño, haciendolo responsivo.

- En formulario, en la parte de terminos y condiciones se utilizó Flexbox para alinear horizontalmente el cuadro de selección con el texto descriptivo.

### ¿Qué hace tu JavaScript, explicado sin copiar el código? ¿Cómo funciona tu validación?

El JavaScript esta dividido en tres archivos, donde se le da una funcionalidad distinta a cada uno. El primero (main.js) es donde se le da forma e interacción al menu hamburgesa en dispositivos moviles o tablets. En el segundo (catalogo.js) es donde se crea las tarjetas del catálogo mediante un arreglo de objetos y tambien aplica filtros según los botones o parámetros pasados por la url. En el tercero (registro.js) es donde se gestiona la validación del formulario en tiempo real. Intercepta el evento de envío (submit) para evitar que la página se recargue automáticamente y evalúa los datos ingresados utilizando expresiones regulares para el correo y el teléfono, además de comprobaciones de longitud y campos obligatorios. Si detecta algún fallo, pone mensajes de error dinámicos en etiquetas <span> en los campos afectados, si la información es correcta, limpia las entradas y muestra un mensaje de registro exitoso. 

### Si usaste IA, ¿para qué la usaste y qué cambiaste tú del resultado?

La IA la utilicé basicamente para aprender, como apenas estoy metiendome en todo este tema, habían muchas cosas que no sabía ni como empezar a hacer, más que todo la parte de integrar JavaScript. Le pedía a la IA que me "enseñara" a diseñar, como lo del menú hamburgesa, lo de la creación del catálogo pero con arreglos desde el JS y el filtrado y la validación del formulario, la IA me daba como un paso a paso, yo lo seguía y luego me corregía o me daba mejores opciones para hacerlo mejor. Tambien me ayudó mucho al principio con la parte de hacer toda la pagina web responsiva, ya que yo desconocía completamente de como hacer esto. Basicamente la IA me daba lo que tenía que poner y yo lo acomodaba a como quería que quedara, cambiaba el tamaño del @media y varias cosas acomodadas a mi gusto, y ya luego le cogí el tiro. Durante todo el trabajo le estuve preguntando si la estrutuctura semantica estaba bien o por que no me funcionaban algunas cosas, etc.

### ¿Qué fue lo más difícil y cómo lo resolviste?

Para mí lo mas difícil fue la creación e integración del JavaScript, como lo dije anteriormente, me apoyé de la IA y algunos videos para construir esta parte y esto me ayudo mucho a entender y no quedarme estancada sin poder continuar con el proyecto.

## Capturas de pantalla:

### En Movil:

![Captura 1 en movil](/CapturasParaReadme/capMovil1.png)
![Captura 2 en movil](/CapturasParaReadme/capMovil2.png)
![Captura 3 en movil](/CapturasParaReadme/capMovil3.png)
![Captura 4 en movil](/CapturasParaReadme/capMovil4.png)
![Captura 5 en movil](/CapturasParaReadme/capMovil5.png)
![Captura 6 en movil](/CapturasParaReadme/capMovil6.png)

### En Escritorio:

![Captura 1 en escritorio](/CapturasParaReadme/capEscritorio1.png)
![Captura 2 en escritorio](/CapturasParaReadme/capEscritorio2.png)
![Captura 3 en escritorio](/CapturasParaReadme/capEscritorio3.png)






