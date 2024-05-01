let usersData = {};

// Función para cargar los datos del localStorage
function cargarDatosDesdeLocalStorage() {
    let storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        usersData = JSON.parse(storedUserData);
    }
}

// Función para validar el inicio de sesión
function validateLogin() {
    try {
        // Cargar los datos del localStorage al intentar iniciar sesión
        cargarDatosDesdeLocalStorage();

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        console.log(usersData)
        // Verificar si el nombre de usuario existe en el objeto usersData
        if (usersData.hasOwnProperty(username)) {
            // Verificar si la contraseña coincide
            if (usersData[username].password === password) {
                alert('Inicio de sesión exitoso');
                return true;
            } else {
                let errorMessage = document.getElementById('error-message');
                errorMessage.innerText = 'Contraseña incorrecta';
                return false;
            }
        } else {
            let errorMessage = document.getElementById('error-message');
            errorMessage.innerText = 'Nombre de usuario no encontrado';
            return false;
        }
    } catch (error) {
        console.error('Error en la función validateLogin:', error);
        return false;
    }
}

// Función para validar el formulario de registro
function validarFormulario() {
    try {
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmPassword = document.getElementById('confirm-password').value;

        let DataUser = {
            username: username,
            email: email,
            password: password
        };
        
        // Agregar el usuario al objeto usersData
        usersData[username] = DataUser;
        
        // Guardar los datos en localStorage
        localStorage.setItem('userData', JSON.stringify(usersData));

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            let errorMessage = document.getElementById('error-message');
            errorMessage.innerText = 'Por favor, complete todos los campos.';
            return false;
        }

        if (password !== confirmPassword) {
            let errorMessage = document.getElementById('error-message');
            errorMessage.innerText = 'Las contraseñas no coinciden.';
            return false;
        }

        alert('Registro exitoso');

        return true;
    } catch (error) {
        console.error('Error en la función validarFormulario:', error);
        return false;
    }
}
