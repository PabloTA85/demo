// Escucha el evento de envío del formulario para agregar un nuevo usuario
document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el envío por defecto

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Crear el objeto usuario
    const usuario = { nombre, apellidos, email, telefono };

    // Enviar los datos al backend
    fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario) // Enviar los datos como JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Mostrar en consola la respuesta
        cargarUsuarios(); // Recargar la lista de usuarios
    });
});

// Función para cargar la lista de usuarios
function cargarUsuarios() {
    fetch('http://localhost:8080/api/usuarios')
        .then(response => response.json())
        .then(data => {
            const usuariosList = document.getElementById('usuariosList');
            usuariosList.innerHTML = ''; // Limpiar la lista antes de llenarla
            data.forEach(usuario => {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'shadow-sm', 'mb-2', 'rounded');  // Estilos de Bootstrap
                li.textContent = `${usuario.nombre} ${usuario.apellidos} - ${usuario.email} - ${usuario.telefono}`;

                // Crear el contenedor para los botones de acción
                const btnContainer = document.createElement('div');
                btnContainer.classList.add('btn-group'); // Añadir un grupo para los botones

                // Botón de editar
                const editarBtn = document.createElement('button');
                editarBtn.textContent = 'Editar';
                editarBtn.classList.add('btn', 'btn-success', 'btn-sm'); // Estilo de botón verde
                editarBtn.addEventListener('click', () => editarUsuario(usuario.id)); // Llamada a la función de editar
                btnContainer.appendChild(editarBtn);

                // Botón de eliminar
                const eliminarBtn = document.createElement('button');
                eliminarBtn.textContent = 'Eliminar';
                eliminarBtn.classList.add('btn', 'btn-danger', 'btn-sm');  // Estilo de botón rojo
                eliminarBtn.addEventListener('click', () => eliminarUsuario(usuario.id)); // Llamada a la función de eliminar
                btnContainer.appendChild(eliminarBtn);

                // Añadir los botones al elemento li
                li.appendChild(btnContainer);
                usuariosList.appendChild(li);
            });
        });
}

// Función para editar un usuario
function editarUsuario(id) {
    fetch(`http://localhost:8080/api/usuarios/${id}`)
        .then(response => response.json())
        .then(usuario => {
            document.getElementById('nombre').value = usuario.nombre;
            document.getElementById('apellidos').value = usuario.apellidos;
            document.getElementById('email').value = usuario.email;
            document.getElementById('telefono').value = usuario.telefono;
            
            // Cambiar el botón para actualizar el usuario
            const form = document.getElementById('usuarioForm');
            const submitBtn = form.querySelector('button');
            submitBtn.textContent = 'Actualizar Usuario'; // Cambiar el texto del botón

            // Actualizar la lógica del formulario para actualizar
            form.onsubmit = function (e) {
                e.preventDefault(); // Prevenir el comportamiento por defecto
                actualizarUsuario(id); // Llamar a la función para actualizar el usuario
            };
        });
}

// Función para actualizar un usuario
function actualizarUsuario(id) {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const usuario = { nombre, apellidos, email, telefono };

    // Realizar la petición PUT para actualizar el usuario
    fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario) // Enviar los datos como JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Mostrar en consola la respuesta
        cargarUsuarios(); // Recargar la lista de usuarios
        resetForm(); // Limpiar el formulario
    });
}

// Función para eliminar un usuario
function eliminarUsuario(id) {
    fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'DELETE' // Realizar una solicitud DELETE
    })
    .then(() => {
        cargarUsuarios(); // Recargar la lista de usuarios después de eliminar
    });
}

// Función para resetear el formulario
function resetForm() {
    const form = document.getElementById('usuarioForm');
    form.reset(); // Limpiar los valores del formulario
    form.onsubmit = function (e) {
        e.preventDefault(); // Prevenir el envío por defecto
        agregarUsuario(); // Llamar a la función para agregar un usuario
    };
}

// Cargar los usuarios al cargar la página
cargarUsuarios();
