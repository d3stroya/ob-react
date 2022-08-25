# Eventos
Un evento puede ocurrir en el padre o en el hijo, así que debemos saber qué tiene que hacer el hijo para que ejecute un evento el padre.
1. Crear father.jsx en la carpeta container
2. Crear child.jsx en la carpeta pure
3. Pintar el componente child en father y father en App.js
4. Mandar evento de child a father
   1. Crear una función en father (showMessage)
   2. Pasar un prop en child (send)
   3. Asociar el evento (onClick) con la prop en child (send)
   4. En father, pasar el prop del child (send) y asociarle la función del father (showMessage)
5. UseRef con botón 2 para mostrar un texto escrito en una alerta:
   1. Importar useRef
   2. Crear un valor inicial vacío (messageRef)
   3. Asociarlo a un elemento (input)
   4. Asociar la constante text al valor actual de elemento input a través de messageRef
   5. Añadir ref al input html
6. Enviar el mensaje escrito al padre:
   1. Pasar el valor del mensaje actual por parámetro de la prop send en el método onClick del botón send message.
7. Pasar evento del hijo al padre a través de un formulario:
   1. Tenemos un input y un botón para el submit.
   2. En child creamos una referencia con useRef para vincularlo al input. Lo llamamos nameRef.
   3. En la etiqueta input le pasamos la referencia nameRef para vincular la constante con el input.
   4. En el formulario, agregamos la función submitName al atributo onSubmit. Esto ejecutará dicha función cuando pulsemos el botón de tipo submit.
   5. La función submitName:
      1. Recibe por parámetro el evento por defecto.
      2. Previene el evento por defecto (e.preventDefault) para que no recargue la página.
      3. Ejecuta dentro de ella la función update, que viene del padre. Le pasa por parámetro el valor actual del input (nameRef.current.value).
   6. Pasamos como prop de child "update".
   7. En father, importamos useState y creamos una constante para el nombre. Definimos un valor inicial.
   8. Creamos la función updateName, que recibe por parámetro un nuevo nombre newName.
   9. Con setName modificamos el valor inicial de name por el valor que se pasa por parámetro.
   10. En el return, pasamos como props al componente child tanto name como update. A name le asociamos la constante name (incialmente es "Franky" y luego cambiará por el nombre que se escriba en el input) y a update le asociamos la función updateName, que en el child recibe como parámetro el valor actual del input.
   11. Al hacer submit, el valor del input pasa del child al father y modifica la constante name, que se pinta en el child como texto.