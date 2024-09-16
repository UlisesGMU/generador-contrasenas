let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const caracteresNumeros = '0123456789';
const caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?/~`';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let contrasenaGenerada = '';
    let cantidadMayusculas = 0, cantidadMinusculas = 0, cantidadNumeros = 0, cantidadEspeciales = 0;

    while (contrasenaGenerada.length < numeroDigitado) {
        let tipoCaracter = Math.floor(Math.random() * 4);
        let caracterAleatorio = '';

        switch (tipoCaracter) {
            case 0:
                caracterAleatorio = caracteresMayusculas[Math.floor(Math.random() * caracteresMayusculas.length)];
                cantidadMayusculas++;
                break;
            case 1:
                caracterAleatorio = caracteresMinusculas[Math.floor(Math.random() * caracteresMinusculas.length)];
                cantidadMinusculas++;
                break;
            case 2:
                caracterAleatorio = caracteresNumeros[Math.floor(Math.random() * caracteresNumeros.length)];
                cantidadNumeros++;
                break;
            case 3:
                caracterAleatorio = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
                cantidadEspeciales++;
                break;
        }

        contrasenaGenerada += caracterAleatorio;
    }

    if (cantidadMayusculas < 1 || cantidadMinusculas < 1 || cantidadNumeros < 1 || cantidadEspeciales < 1) {
        generar();
        return;
    }

    contrasena.value = contrasenaGenerada;
}

function limpiar() {
    contrasena.value = '';
    cantidad.value = '';
}