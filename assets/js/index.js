// Definición de la clase Libro
class Libro {
    constructor(titulo, autor, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = estado;
    }

    mostrarInfo() {
        console.log(
            `El libro "${this.titulo}" de ${this.autor} se encuentra ${this.estado}.`
        );
    }
}

// Inventario
const inventario = [];
let encabezadoMostrado = false;

// Evento del botón
document.getElementById("btnAgregar").addEventListener("click", agregarLibro);

function agregarLibro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const estadoSeleccionado = document.querySelector('input[name="estado"]:checked');
    const mensaje = document.getElementById("mensaje");

    // ? Validación
    if (!titulo || !autor || !estadoSeleccionado) {
        mensaje.textContent = "Faltan campos";
        mensaje.classList.remove("d-none", "alert-success");
        mensaje.classList.add("alert-danger");
        return;
    }

    const estado = estadoSeleccionado.value;

    const nuevoLibro = new Libro(titulo, autor, estado);
    inventario.push(nuevoLibro);

    // ? Mostrar encabezado SOLO una vez
    if (!encabezadoMostrado) {
        console.log("--- Inventario de la Biblioteca ---");
        encabezadoMostrado = true;
    }

    // Mostrar SOLO el libro agregado
    nuevoLibro.mostrarInfo();

    // ? Mensaje de éxito
    mensaje.textContent = "El libro fue ingresado correctamente";
    mensaje.classList.remove("d-none", "alert-danger");
    mensaje.classList.add("alert-success");

    // Limpiar formulario
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    estadoSeleccionado.checked = false;
}