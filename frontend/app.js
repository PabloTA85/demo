document.getElementById('usuarioForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const usuario = { nombre, apellidos, email, telefono };

    fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cargarUsuarios();
    });
});

function cargarUsuarios() {
    fetch('http://localhost:8080/api/usuarios')
        .then(response => response.json())
        .then(data => {
            const usuariosList = document.getElementById('usuariosList');
            usuariosList.innerHTML = '';
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
                editarBtn.addEventListener('click', () => editarUsuario(usuario.id));
                btnContainer.appendChild(editarBtn);

                // Botón de eliminar
                const eliminarBtn = document.createElement('button');
                eliminarBtn.textContent = 'Eliminar';
                eliminarBtn.classList.add('btn', 'btn-danger', 'btn-sm');  // Estilo de botón rojo
                eliminarBtn.addEventListener('click', () => eliminarUsuario(usuario.id));
                btnContainer.appendChild(eliminarBtn);

                li.appendChild(btnContainer);
                usuariosList.appendChild(li);
            });
        });
}

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
            submitBtn.textContent = 'Actualizar Usuario';
            form.onsubmit = function (e) {
                e.preventDefault();
                actualizarUsuario(id);
            };
        });
}

function actualizarUsuario(id) {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    const usuario = { nombre, apellidos, email, telefono };

    fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cargarUsuarios();
        resetForm();
    });
}

function eliminarUsuario(id) {
    fetch(`http://localhost:8080/api/usuarios/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        cargarUsuarios();
    });
}

function resetForm() {
    const form = document.getElementById('usuarioForm');
    form.reset();
    form.onsubmit = function (e) {
        e.preventDefault();
        agregarUsuario();
    };
}

cargarUsuarios();
